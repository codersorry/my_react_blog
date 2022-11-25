import styled from 'styled-components';

export const CommentItemStyled = styled.div`
  &:hover {
    .avatar {
      transition: all 0.5s;
      transform: rotate(360deg);
    }
  }
  .avatar {
    transition: all 0.5s;
  }

  .upPerson {
    color: #ff6137;
    border: 1px solid #ff6137;
    font-size: 10px;
    padding: 1px 2px;
    margin-right: 2px;
    border-radius: 2px;
    font-weight: 600;
  }

  .comment {
    position: relative;
    background-color: inherit;
  }

  .comment-inner {
    display: flex;
    padding: 16px 0;
  }

  .comment-avatar {
    position: relative;
    flex-shrink: 0;
    margin-right: 12px;
    cursor: pointer;
  }

  .comment-content {
    position: relative;
    flex: 1 1 auto;
    min-width: 1px;
    font-size: 14px;
    word-wrap: break-word;
  }

  .comment-content-author {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 4px;
    font-size: 14px;
  }

  .comment-content-detail p {
    margin-bottom: inherit;
    white-space: pre-wrap;
  }

  .comment-content-author-time {
    color: #ccc;
    white-space: nowrap;
    cursor: auto;
  }

  .comment-content-author > a,
  .comment-content-author > span {
    padding-right: 8px;
    font-size: 12px;
    line-height: 18px;
  }

  .comment-actions {
    margin-top: 12px;
    margin-bottom: inherit;
    padding-left: 0;
  }

  .comment-actions > li {
    display: inline-block;
    color: rgba(0, 0, 0, 0.45);
  }

  .comment-actions > li > span {
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    cursor: pointer;
    transition: color 0.3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
