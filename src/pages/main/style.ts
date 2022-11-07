import styled from 'styled-components';

type BlogMainStyledPropsType = {
  isShowRightBar: boolean;
};

export const BlogMainStyled = styled.div<BlogMainStyledPropsType>`
  overflow-x: hidden;

  .comm-left {
    background-color: #fff;
    padding: 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid #eee;
  }
  .comm-box {
    background-color: #fff;
    margin-left: 0.5rem;
    padding: 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid #eee;
  }
  .comm-main {
    margin-top: 4rem;
  }
`;
