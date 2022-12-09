import React, { FC, PropsWithChildren } from 'react';
import { FriendStyledStyled } from './style';
import { Avatar, Tooltip } from 'antd';

type IProps = {
  info: { id: string; name: string; describe: string };
  containerWidth: number;
};
type IFriendItem = PropsWithChildren<IProps>;

const FriendItem: FC<IFriendItem> = (props) => {
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
    const ml = random(props.containerWidth - 120);
    const dur = random(6) + 2;
    return { r, g, b, mt, ml, dur };
  }

  const friendItemClick = () => {
    window.open('http://www.baidu.com', '_blank');
  };
  return (
    <FriendStyledStyled styles={styles}  onClick={friendItemClick}>
      <Tooltip title={props.info.describe} color={`rgba(${styles.r},${styles.g},${styles.b},0.9)`}>
        <div>
          <Avatar src='https://q.qlogo.cn/headimg_dl?dst_uin=792478594&spec=100' size={30} />
        </div>
        <div>{props.info.name}</div>
      </Tooltip>
    </FriendStyledStyled>
  );
};

export default FriendItem;
