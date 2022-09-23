import styled from 'styled-components';

interface ArticleStyledPropsType {
  isShowDetail: boolean;
}

export const ArticleStyled = styled.div<ArticleStyledPropsType>`
  display: ${(props) => (props.isShowDetail ? 'none' : 'block')};
  .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    font-size: 20px;
  }

  .list-title {
    font-size: 1.3rem;
    color: #1e90ff;
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .list-context {
    color: #777;
    padding: 0.5rem;
  }
  .list-icon {
    padding: 0.5rem 0;
    color: #aaa;
  }
  .list-icon span {
    display: inline-block;
    padding: 0 10px;
  }

  .breadcrumb {
    margin: 3px 10px;
    font-weight: 600;
  }

  .breadcrumbItem {
    cursor: pointer;
  }

  .paginationStyle {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadingDiv {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;