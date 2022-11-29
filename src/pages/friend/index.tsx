import React, { useRef, MutableRefObject, useEffect, useState } from 'react';
import { FriendStyled } from './style';
import FriendItem from './cpns/friendItem';
import Comment from '@/components/comment';
import ApplyFriend from './cpns/applyFriend';
import { debounce } from '@/utils/tools/common';
import { Input, Button, Divider } from 'antd';
const { TextArea } = Input;
const friends = [
  { id: '1', name: 'Darry', describe: 'I am Darry' },
  { id: '2', name: 'Jarry', describe: 'I am Darry' },
  { id: '3', name: 'Sorry', describe: 'I am Darry' },
  { id: '4', name: 'Kitty', describe: 'I am Darry' },
  { id: '5', name: 'Jay', describe: 'I am Darry' },
  { id: '6', name: 'Tom', describe: 'I am Darry' },
  { id: '7', name: 'Ray', describe: 'I am Darry' },
  { id: '8', name: 'Angel', describe: 'I am Darry' },
  { id: '9', name: 'Tony', describe: 'I am Darry' },
  { id: '10', name: 'Sisiy', describe: 'I am Darry' },
  { id: '11', name: 'Darry', describe: 'I am Darry' },
  { id: '12', name: 'Jarry', describe: 'I am Darry' },
  { id: '13', name: 'Sorry', describe: 'I am Darry' },
  { id: '14', name: 'Kitty', describe: 'I am Darry' },
  { id: '15', name: 'Jay', describe: 'I am Darry' },
];

const Friend = () => {
  // 获取friend-container的宽度
  const friendContainerRef: MutableRefObject<any> = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // 组件第一次加载添加resize事件，监听屏幕尺寸变化，重新设置容器宽度值
    window.addEventListener('resize', saveWidth);

    // 组件卸载的时候，取消onresize监听
    return () => {
      window.removeEventListener('resize', saveWidth);
    };
  }, []);

  useEffect(() => {
    if (friendContainerRef) {
      setContainerWidth(friendContainerRef.current.offsetWidth);
    }
  }, [friendContainerRef]);

  const saveWidth = () => {
    debounce(function () {
      if (friendContainerRef) {
        setContainerWidth(friendContainerRef.current.offsetWidth);
      }
    }, 500);
  };

  return (
    <FriendStyled>
      <div className='friend-container' ref={friendContainerRef}>
        {friends.map((item) => (
          <FriendItem key={item.id} info={item} containerWidth={containerWidth} />
        ))}
      </div>
      <div className='welcome-title'>欢迎交换友链哦 ~</div>
      <ApplyFriend />
      <div className='tips'>
        <h3>温馨提示：</h3>
        <p>申请提交后无特殊情况, 24小时内审核完毕, 超时可各种途径私信我哦 ~</p>
        <p>申请成功后, 你滴博客会随机出现在上方, hover显示描述信息哦 ~</p>
      </div>
      <Divider />
      <div className='say_top_tip'>
        互动起来，留下你想说的话吧❤ ~<span style={{ color: '#ec5328' }}>(支持markdown语法)</span>
      </div>

      <div className='comment_input_wrap'>
        <div className='input_and_submit'>
          <TextArea
            style={{
              background:
                'url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png) right bottom no-repeat',
            }}
            placeholder='请输入留言 ~'
            rows={5}
            onChange={(e) => ({})}
          />
          <Button onClick={() => {}} style={{ marginTop: '15px' }} type='primary'>
            发表留言
          </Button>
        </div>
        <Comment />
      </div>
    </FriendStyled>
  );
};

export default Friend;
