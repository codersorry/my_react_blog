import styled from 'styled-components';

export const CommentStyled = styled.div`
  overflow-x: hidden;
  padding: 0 10px;

  .comment-out-div {
    /* background: linear-gradient(to right, rgba(247, 121, 125, 0.3), rgba(251, 215, 134, 0.3), rgba(198, 255, 221, 0.3)); */
    /* background: linear-gradient(to right, rgba(247, 121, 125, 0.8), rgba(251, 215, 134, 0.8), rgba(198, 255, 221, 0.8)); */
    background-color: rgba(198, 255, 221, 0.3);
    margin: 10px 0;
    border: 2px solid rgba(247, 121, 125, 0.3);
    border-radius: 20px;
    padding: 10px;
  }

  .children {
    margin-left: 40px;
  }
  .comment_tip {
    text-align: center;
    h2 {
      color: rgb(153, 153, 153);
      font-weight: bold;
    }
  }
`;
