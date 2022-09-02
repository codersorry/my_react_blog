import styled from 'styled-components'

export const ArticleItemStyled = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f6f6f6;
  /* height: 380px; */
  margin: 0px 10px 20px 10px;
  padding: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .title {
    margin-left: 3px;
    font-size: 18px;
    font-weight: 550;
    cursor: pointer;

    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 1; //行数
    line-clamp: 1;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }

  .isTop {
    position: absolute;
    right: -48px;
    width: 140px;
    height: 25px;
    background-color: red;
    text-align: center;
    line-height: 25px;
    color: white;
    transform: rotate(45deg);
    .topIcon {
      transform: rotate(-45deg);
    }
  }

  .imgDiv {
    height: 260px;
    background-color: skyblue;
  }
  .article_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px -7px;
    > div {
      margin-left: 10px;
    }
  }

  .tag_item {
    /* padding: 0px 10px;
    border-radius: 3px;
    margin-right: 5px;
    color: white; */
    font-weight: 700;
  }

  .introduce {
    margin-left: 3px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 2; //行数
    line-clamp: 2;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }

  //图片 到时候可以改下这个的样式
  .image_box {
    /* cursor: url("https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605510419334.png"),
    auto; */
    margin: 5px 0;
    max-height: 260px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 6px;
    img {
      transition: all 0.5s;
      width: 100%;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .flex-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
