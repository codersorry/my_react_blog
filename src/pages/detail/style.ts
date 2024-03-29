import styled from 'styled-components';

interface DetailStyledProps {
  isShowDetail?: boolean;
}

export const DetailStyled = styled.div<DetailStyledProps>`
  display: ${(props) => (props.isShowDetail ? 'block' : 'none')};
  .bread-div {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background-color: #e1f0ff;
  }
  .detailed-title {
    font-size: 1.8rem;
    text-align: center;
    padding: 1rem;
  }
  .center {
    text-align: center;
  }
  .detailed-content {
    padding: 1.3rem;
    padding-bottom: 0;
    font-size: 1rem;
  }
  .wechat-head {
    font-weight: normal;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    background-color: #f3f3f3;
    margin: 0;
    padding: 0;
    color: #777;
    text-align: center;
  }
  .share-hover1:hover .share-hover1-in {
    background: #ff763b;
    color: #fff !important;
  }
  .share-hover2:hover .share-hover2-in {
    background: #56b6e7;
    color: #fff !important;
  }
  .share-hover3:hover {
    background: #7bc549;
    color: #fff !important;
  }
  .share-hover4:hover .icon-QQkongjian {
    background: #fdbe3d;
    color: #fff !important;
  }
  .share-hover5:hover .share-hover5-in {
    background: #55acee;
    color: #fff !important;
  }
  .share-hover6:hover .share-hover6-in {
    background: rgb(68, 97, 157);
    color: #fff !important;
  }
  .clear-bug .ant-tooltip-arrow::before {
    background-color: #fff;
  }
  .clear-bug .ant-tooltip-inner {
    background-color: #fff;
    padding: 6px 0;
  }
  /* code {
  display: block ;
   background-color:#f3f3f3;
   padding: .5rem !important;
   overflow-y: auto;
   font-weight: 300;
   font-family: Menlo, monospace;
   border-radius: .3rem;
} */

  .title-anchor {
    color: #888 !important;
    padding: 4px !important;
    margin: 0rem !important;
    height: auto !important;
    line-height: 1.2rem !important;
    font-size: 0.9rem !important;
    border-bottom: 1px dashed #eee;
  }
  .active {
    color: rgb(30, 144, 255) !important;
  }
  .nav-title {
    text-align: center;
    color: #888;
    border-bottom: 1px solid rgb(30, 144, 255);
    border-radius: 0.3rem;
  }

  /* markdown样式 */
  /* .detailed-content img {
    max-width: 100%;
    object-fit: contain;
  }

  pre {
    display: block;
    background-color: #283646 !important;
    padding: 0.5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: 0.3rem;
  }

  pre > code {
    border: 0px !important;
    background-color: #283646 !important;
    color: #fff;
  }
  code {
    display: inline-block;
    background-color: #f3f3f3;
    border: 1px solid #fdb9cc;
    border-radius: 3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color: #4f4f4f;
    margin: 0px 3px;
  }
  blockquote p {
    margin: 0;
  }
  .list-context img {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    max-width: 1000px !important;
    display: block;
    margin: 8px auto;
  } */
  /* markdown样式 */

  .detailed-nav {
    margin-top: 0.5rem;
  }

  .article_tags {
    background-color: #f6f8fa;
    width: 100%;
    padding: 10px;
    .article_tags_container {
      display: flex;
      align-items: center;
    }
    .tag_item {
      margin-left: 6px;
      padding: 4px 10px;
      height: 60px;
      border-radius: 7px;
      color: white;
      cursor: pointer;
      height: 23px;
      display: flex;
      align-items: center;
    }
    .modifyTime {
      text-align: right;
      color: #ccc;
      font-size: 15px;
    }
  }
`;
