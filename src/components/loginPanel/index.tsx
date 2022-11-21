import React, { useState } from 'react';
import { LoginPanelStyled } from './style';
import { Input, Button, Form, Tooltip, Typography, Space, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { set_login_panel_hide, set_user_info } from '@/store/actions/main';
import { useDispatch } from 'react-redux';
import { sendMail, login } from '@/services/components/loginPanel';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginPanel: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(0);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const emailInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onFinish = async (values: any) => {
    const res = await login(values);
    if (res.result) {
      console.log(res.data);
      dispatch(set_user_info(res.data));
      localStorage.setItem('darryBlogUserInfo', JSON.stringify(res.data));
      message.destroy();
      message.success(res.message);
      dispatch(set_login_panel_hide());
    } else {
      message.destroy();
      message.error(res.message);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const closeLoginPanel = () => {
    dispatch(set_login_panel_hide());
  };

  const clickSendMail = async () => {
    if (email === '') {
      message.destroy();
      message.error('邮箱为空哦 ~');
      return false;
    } else if (!regMail(email)) {
      message.destroy();
      message.error('邮箱格式错啦 ~');
      return false;
    }
    const res = await sendMail(email);
    if (res.result) {
      setCountdown(60);
      countDowm(60);
    }
  };

  // 验证码倒计时
  function countDowm(count: number) {
    let t = setInterval(() => {
      if (count === 0) {
        // 倒计时结束， 取消定时器
        clearInterval(t);
      } else {
        setCountdown(--count);
      }
    }, 1000);
  }

  // 邮箱正则验证
  function regMail(email: string) {
    // eslint-disable-next-line no-useless-escape
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
  }

  return (
    <LoginPanelStyled>
      <div className='close' onClick={closeLoginPanel}>
        <CloseOutlined />
      </div>
      <div className='loginTitle'>邮箱登录</div>
      <div className='formDiv'>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
          <Form.Item
            name='email'
            label='邮箱'
            rules={[
              { required: true, message: '忘记填邮箱啦 ~' },
              { max: 20, message: '这也太长啦 ~' },
              {
                // eslint-disable-next-line no-useless-escape
                pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: '邮箱格式不对哦 ~',
              },
            ]}
          >
            <Space>
              <Form.Item name='email' noStyle>
                <Input style={{ width: 250 }} placeholder='请填写邮箱' onChange={emailInputChange} />
              </Form.Item>
              {countdown === 0 ? (
                <Tooltip title='点击发送验证码 ~'>
                  <Typography.Link href='#API' onClick={clickSendMail}>
                    发送验证码
                  </Typography.Link>
                </Tooltip>
              ) : (
                <span>
                  <span style={{ color: 'red' }}>{countdown}</span>秒再发送
                </span>
              )}
            </Space>
          </Form.Item>
          <Form.Item
            name='penName'
            label='笔名'
            rules={[
              { required: true, message: '忘记填笔名啦 ~' },
              { max: 20, message: '这也太长啦 ~' },
            ]}
          >
            <Input placeholder='请填写笔名' />
          </Form.Item>
          <Form.Item
            name='code'
            label='验证码'
            rules={[
              { required: true, message: '验证码要填哦 ~' },
              { max: 10, message: '这也太长啦 ~' },
            ]}
          >
            <Input placeholder='请填写验证码' />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className='btns' type='primary' htmlType='submit'>
              登录
            </Button>
            <Button className='btns' htmlType='button' onClick={onReset}>
              清空
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginPanelStyled>
  );
};

export default LoginPanel;
