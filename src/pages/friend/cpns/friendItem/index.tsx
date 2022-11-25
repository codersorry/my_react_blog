import React from 'react';
import { FriendStyledStyled } from './style';
import { Avatar } from 'antd';

type FriendItemProps = {
  info: { id: string; name: string };
};

const FriendItem: React.FC<FriendItemProps> = (props) => {
  const styles = getRandomStyles();

  // 获取参数范围内随机数
  function random(num: number) {
    return Math.floor(Math.random() * num);
  }

  // 设置每个item元素的样式
  function getRandomStyles() {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    const mt = random(200);
    const ml = random(800);
    const dur = random(6) + 2;
    return { r, g, b, mt, ml, dur };
  }
  return (
    <FriendStyledStyled styles={styles}>
      <div>
        <Avatar src='https://q.qlogo.cn/headimg_dl?dst_uin=792478594&spec=100' size={30} />
      </div>
      <div>{props.info.name}</div>
    </FriendStyledStyled>
  );
};

export default FriendItem;
