import styled from 'styled-components';

interface BackTopStyledPropsType {
  isShow: boolean;
}

export const BackTopStyled = styled.div<BackTopStyledPropsType>`
  z-index: 8;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  position: fixed;
  right: 1%;
  top: 0;
  transform: ${(props) => (props.isShow ? 'translateY(-20%)' : 'translateY(-120%)')};
  .mobile {
    display: none;
  }
  img {
    animation: upAndDown 1.5s infinite;
  }

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

  @keyframes upAndDown {
    0% {
      transform: translateY(0px) scale(0.8);
    }
    50% {
      transform: translateY(10px) scale(0.8);
    }
    100% {
      transform: translateY(0px) scale(0.8);
    }
  }
  @media not screen and (min-width: 50em) {
    transform: none;
    position: fixed;
    right: 50px;
    top: 85%;
    img {
      display: none;
    }
    .mobile {
      display: ${(props) => (props.isShow ? 'block' : 'none')};
    }
  }
`;
