import React from 'react';
import { ApplyFriendStyled } from './style';
import { Input, Form, Button } from 'antd';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 16 },
};

const ApplyFriend = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <ApplyFriendStyled>
      <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
        <Form.Item name='name' label='大名' rules={[{ required: true, message: '大佬你的名字呢 ~' }]}>
          <Input placeholder='大佬的大名 ~' />
        </Form.Item>
        <Form.Item
          name='address'
          label='网址'
          rules={[
            { required: true, message: '博客地址没填哦 ~' },
            { max: 150, message: '这也太长啦 ~' },
          ]}
        >
          <Input placeholder='博客地址(http/https开头) ~' />
        </Form.Item>
        <Form.Item
          name='email'
          label='邮箱'
          rules={[
            { required: true, message: '邮箱地址没填哦 ~' },
            { max: 30, message: '这也太长啦 ~' },
            {
              // eslint-disable-next-line no-useless-escape
              pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              message: '邮箱格式不对哦 ~',
            },
          ]}
        >
          <Input placeholder='你的邮箱 ~' />
        </Form.Item>
        <Form.Item name='describe' label='描述' rules={[{ max: 50, message: '这也太长啦 ~' }]}>
          <Input placeholder='博客描述 ~' />
        </Form.Item>
        <Form.Item name='logo' label='图标' rules={[{ max: 150, message: '这也太长啦 ~' }]}>
          <Input placeholder='logo地址(http/https开头) ~' />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className='btns' type='primary' htmlType='submit'>
            提交
          </Button>
          <Button className='btns' htmlType='button' onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </ApplyFriendStyled>
  );
};

export default ApplyFriend;
