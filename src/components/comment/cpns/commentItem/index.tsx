import React, { useState, createElement } from 'react';
import { Tooltip, Avatar } from 'antd';
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

  return (
    <CommentItemStyled>
      <div className='comment'>
        <div className='comment-inner'>
          <div className='comment-avatar'>
            <Avatar className='avatar' src={'https://q.qlogo.cn/headimg_dl?dst_uin=792478594&spec=40'} alt={'Darry'} />
          </div>
          <div className='comment-content'>
            <div className='comment-content-author'>
              <span className='comment-content-author-name'>
                {' '}
                <span style={{ fontSize: '12px', color: '#ff5777' }}>
                  {'Darry'}
                  &nbsp;
                  {<span className='upPerson'>博主</span>}
                </span>
              </span>
              <span className='comment-content-author-time'>
                <span>2022/7/11 23:00:51</span>
                <span style={{ marginLeft: '5px' }}>江苏 无锡</span>
              </span>
            </div>
            <div className='comment-content-detail'>
              <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
              </p>
            </div>
            <ul className='comment-actions'>
              <li>
                <Tooltip key='comment-basic-like' title='Like'>
                  <span onClick={like}>
                    {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                    <span className='comment-action'>{likes}</span>
                  </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip key='comment-basic-dislike' title='Dislike'>
                  <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className='comment-action'>{dislikes}</span>
                  </span>
                </Tooltip>
              </li>
              <li>
                <span key='comment-basic-reply-to' style={{ color: '#1890FF' }}>
                  回复
                </span>
              </li>
              <li>
                <span key='comment-basic-reply-to' style={{ color: '#1890FF' }}>
                  删除
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CommentItemStyled>
  );
};

export default CommentItem;
