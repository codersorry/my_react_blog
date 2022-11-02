import React, { useState, createElement } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { CommentItemStyled } from './style';

interface CommentItemProps {
  // children?: React.ReactNode;
}

const CommentItem: React.FC<CommentItemProps> = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key='comment-basic-dislike' title='Dislike'>
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className='comment-action'>{dislikes}</span>
      </span>
    </Tooltip>,
    <span key='comment-basic-reply-to' style={{ color: '#1890FF' }}>
      回复
    </span>,
    <span key='comment-basic-reply-to' style={{ color: '#1890FF' }}>
      删除
    </span>,
  ];
  return (
    <CommentItemStyled>
      <Comment
        actions={actions}
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design resources (Sketch and
            Axure), to help people create their product prototypes beautifully and efficiently.
          </p>
        }
        author={
          // 这些样式应该都放到style里面去
          <span style={{ fontSize: '12px', color: '#ff5777' }}>
            {'Darry'}
            &nbsp;
            {<span className='upPerson'>博主</span>}
          </span>
        }
        avatar={
          <Avatar className='avatar' src={'https://q.qlogo.cn/headimg_dl?dst_uin=792478594&spec=40'} alt={'Darry'} />
        }
        datetime={
          <Tooltip title={''}>
            <span>2022/7/11 23:00:51</span>
            <span style={{ marginLeft: '5px' }}>江苏 无锡</span>
          </Tooltip>
        }
      />
    </CommentItemStyled>
  );
};

export default CommentItem;
