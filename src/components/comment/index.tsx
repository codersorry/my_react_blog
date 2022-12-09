import React from 'react';
import CommentItem from './cpns/commentItem';
import { CommentStyled } from './style';

const Comment: React.FC = () => {
  //const [commentList, setCommentList] = useState([1, 2, 3]);
  const commentList = [1, 2, 3];
  return (
    <CommentStyled>
      {commentList.length !== 0 &&
        commentList.map((item, index) => {
          return (
            <div className='comment-out-div' key={index}>
              <CommentItem />
              <div className='children'>
                {commentList.map((item, index) => {
                  return <CommentItem key={index + 1} />;
                })}
              </div>
            </div>
          );
        })}
    </CommentStyled>
  );
};

export default Comment;
