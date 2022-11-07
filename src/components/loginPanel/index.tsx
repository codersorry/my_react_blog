import React from 'react';
import { LoginPanelStyled } from './style';
import { Input, Button, Form, Tooltip, Typography, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { set_login_panel_hide } from '@/store/actions/main';
import { useDispatch } from 'react-redux';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginPanel: React.FC = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const closeLoginPanel = () => {
    dispatch(set_login_panel_hide());
  };

  return (
    <LoginPanelStyled>
      <div className='close' onClick={closeLoginPanel}>
        <CloseOutlined />
      </div>
      <div className='loginTitle'>邮箱登录</div>
      <div className='formDiv'>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
          <Form.Item
            name='mail'
            label='邮箱'
            rules={[
              { required: true, message: '忘记填邮箱啦 ~' },
              { max: 20, message: '这也太长啦 ~' },
            ]}
          >
            <Space>
              <Form.Item name='mail' noStyle>
                <Input style={{ width: 250 }} placeholder='请填写邮箱' addonAfter='@qq.com' />
              </Form.Item>
              <Tooltip title='点击发送验证码 ~'>
                <Typography.Link href='#API'>发送验证码</Typography.Link>
              </Tooltip>
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
