import styled from 'styled-components';

type HeaderStyledPropsType = {
  isShowHeader: boolean;
};

export const HeaderStyled = styled.div<HeaderStyledPropsType>`
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  scroll-behavior: smooth;
  background-color: rgba(40, 54, 70, 0.8);
  /* background: linear-gradient(-225deg, #ffe6fa 0, #e3fdf5 100%);
  box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  text-shadow: 0 0 0.0625rem rgba(0, 0, 0, 0.1);
  color: #333; */

  padding: 0.4rem;
  /* 根节点（html）的font-size决定了rem的尺寸，也就是说它是一个相对单位，相对于(html)。 */
  overflow: hidden;
  height: 3.2rem;
  border-bottom: 1px solid #ccc;
  z-index: 999;
  transition: all ease-out 0.3s;

  /* 解决ant固钉报错 */
  z-index: 10 !important;
  position: fixed;
  width: 100%;
  top: ${(props) => (props.isShowHeader ? '0' : '-50px')};

  .header-logo {
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 1.4rem;
    text-align: left;
    line-height: 2.5rem;

    background: -webkit-linear-gradient(
      left,
      #ffffff,
      #ff0000 6.25%,
      #ff7d00 12.5%,
      #ffff00 18.75%,
      #00ff00 25%,
      #00ffff 31.25%,
      #0000ff 37.5%,
      #ff00ff 43.75%,
      #ffff00 50%,
      #ff0000 56.25%,
      #ff7d00 62.5%,
      #ffff00 68.75%,
      #00ff00 75%,
      #00ffff 81.25%,
      #0000ff 87.5%,
      #ff00ff 93.75%,
      #ffff00 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    animation: masked-animation 2s infinite linear;
  }
  @keyframes masked-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100%, 0;
    }
  }
  .header-txt {
    font-size: 0.6rem;
    color: #fef2ec;
    padding-left: 0.3rem;
    display: inline-block;
  }
  .ant-menu {
    /* 改变antd自带大小 */
    line-height: 2.8rem;
  }
  .ant-menu-item {
    /* 改变antd自带大小 */
    font-size: 0.8rem !important;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .ant-menu-item:hover {
    color: #e0f2f2 !important;
  }

  .ant-menu-submenu-title:hover {
    color: #e0f2f2 !important;
  }

  // 顶部菜单选中颜色
  .ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #e0f2f2 !important;
  }
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-selected {
    color: #e0f2f2 !important;
  }
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-open {
    color: #e0f2f2 !important;
  }

  .smallheader-menu {
    line-height: 2.8rem;
    font-size: 1rem;
    display: block;
    text-align: center;
    color: #fff;
  }

  .avatarSpan {
    position: absolute;
    right: 10px;
    top: 10px;
    color: white;
    cursor: pointer;
  }

  @media not screen and (min-width: 50em) {
    .userName {
      display: none;
    }
  }
`;
