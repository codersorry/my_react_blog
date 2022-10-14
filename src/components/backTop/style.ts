import styled from 'styled-components';

interface BackTopStyledPropsType {
  isShow: boolean;
}

export const BackTopStyled = styled.div<BackTopStyledPropsType>`
  .spider-container {
    display: grid;
    justify-content: center;
    position: absolute;
    right: 175px;
    top: 200px;

    transform: ${(props) => (props.isShow ? 'translateY(-250px)' : 'translateY(0px)')};

    animation: ${(props) =>
      props.isShow
        ? 'show 0.675s 1.5s cubic-bezier(0.25, 0.46, 0.29, 1.25) 1'
        : 'hide 1.5s 0.675s cubic-bezier(0.25, 0.46, 0.29, 1.25) 1'};

    animation-fill-mode: forwards;
  }

  /* 出现 */
  @keyframes show {
    0% {
      transform: translateY(-250px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  /* 消失 */
  @keyframes hide {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-250px);
    }
  }

  .spider {
    width: 150px;
    position: absolute;
    display: flex;
    justify-content: center;
    transform: rotate(-10deg);
  }
  .spider::before {
    content: '';
    display: block;
    width: 1px;
    height: 250px;
    position: absolute;
    background-color: black;
    /* background-color: rgba(250, 250, 250, 0.6); */
    bottom: 100%;
    transform-origin: bottom;
    transform: rotate(10deg);
  }
  .spider .body {
    width: 40px;
    height: 25px;
    background-color: #333;
    border-radius: 46%;
    position: relative;
    display: grid;
    justify-items: center;
  }
  .spider .body .eyes {
    width: 25px;
    height: 10px;
    margin-top: 20%;
    display: flex;
    justify-content: space-around;
  }
  .spider .body .eyes::before,
  .spider .body .eyes::after {
    content: '';
    display: block;
    background-color: rgba(250, 250, 250, 0.7);
    width: 7.5px;
    height: 5px;
    border-radius: 50%;
    animation: blink 3s 3.75s infinite;
  }
  .spider .body .mouth {
    width: 15px;
    height: 7.5px;
    position: relative;
    bottom: 5px;
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0) 45%,
      rgba(250, 250, 250, 0.8) 45.1%,
      rgba(250, 250, 250, 0.8) 100%
    );
    border-radius: 0 0 15px 15px;
    transform-origin: 50% 60%;
    transform: scale(0);
    animation: smile 0.5s 4.5s ease-out 1;
    animation-fill-mode: forwards;
  }
  .spider .legs-left {
    width: 25px;
    position: relative;
    display: grid;
    align-items: center;
    transform-origin: right;
    animation: legs-left 0.5s 1.9s ease-out 1;
  }
  .spider .legs-left .leg {
    width: 10px;
    height: 1px;
    position: absolute;
    transform-origin: right;
    right: 0;
  }
  .spider .legs-left .leg::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 1px;
    right: 10px;
    background-color: #333;
    transform-origin: right;
    transform: rotate(-35deg);
  }
  .spider .legs-left .leg::after {
    content: '';
    display: block;
    position: absolute;
    width: 150%;
    height: 100%;
    background-color: #333;
    transform-origin: left;
    transform: rotate(15deg);
  }
  .spider .legs-left .leg-2 {
    margin-bottom: 10px;
    transform: rotate(10deg);
  }
  .spider .legs-left .leg-3 {
    margin-top: 7.5px;
    transform: rotate(-8deg);
  }
  .spider .legs-right {
    width: 25px;
    position: relative;
    display: grid;
    align-items: center;
    transform-origin: left;
    animation: legs-right 0.5s 1.9s ease-out 1;
  }
  .spider .legs-right .leg {
    width: 10px;
    height: 1px;
    position: absolute;
    transform-origin: right;
    left: 0;
  }
  .spider .legs-right .leg::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 1px;
    left: 10px;
    background-color: #333;
    transform-origin: left;
    transform: rotate(35deg);
  }
  .spider .legs-right .leg::after {
    content: '';
    display: block;
    position: absolute;
    width: 150%;
    height: 100%;
    right: 0;
    background-color: #333;
    transform-origin: right;
    transform: rotate(-15deg);
  }
  .spider .legs-right .leg-2 {
    margin-bottom: 10px;
    transform: rotate(-10deg);
  }
  .spider .legs-right .leg-3 {
    margin-top: 7.5px;
    transform: rotate(8deg);
  }

  @keyframes smile {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes legs-left {
    0% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes legs-right {
    0% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes blink {
    0% {
      transform: scaleY(1);
    }
    3% {
      transform: scaleY(0);
    }
    6% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
