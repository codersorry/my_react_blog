import React, { useEffect } from 'react';
import { SayStyled } from './style';
import { Input, Button } from 'antd';
import Comment from '@/components/comment';
const { TextArea } = Input;

const Say = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SayStyled>
      <div className='say_top_tip'>
        互动起来，随便说点什么吧❤ ~<span style={{ color: '#ec5328' }}>(支持markdown语法)</span>
      </div>

      <div className='comment_input_wrap'>
        <div className='input_and_submit'>
          <TextArea
            style={{
              background:
                'url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png) right bottom no-repeat',
            }}
            placeholder='请输入内容'
            rows={5}
            onChange={(e) => ({})}
          />
          <Button onClick={() => {}} style={{ marginTop: '15px' }} type='primary'>
            发表说说
          </Button>
        </div>
        <Comment />
      </div>
    </SayStyled>
  );
};

export default Say;
