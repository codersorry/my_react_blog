import styled from 'styled-components';

import curImg from '@/images/treeFlower.gif';

export const LoginPanelStyled = styled.div`
  background: url(${curImg}) no-repeat center center !important;
  /* opacity: 0.9; */
  background-size: 100% 100%;
  z-index: 99;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 304px;
  transform: translate(-50%, -50%);

  .loginTitle {
    text-align: center;
    margin: 20px auto;
    font-size: 20px;
    font-weight: 600;
  }

  .formDiv {
    opacity: 0.8;
  }

  .btns {
    margin: 6px 10px;
  }

  .close {
    position: absolute;
    display: inline-block;
    width: 22px;
    height: 22px;
    top: 0;
    right: 0;
    /* background-color: skyblue; */
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    color: #8c8c8c;
    font-size: 18px;
    border: #8c8c8c solid 1px;
  }

  .close:hover {
    color: #404040;
    border-color: #404040;
  }
`;
