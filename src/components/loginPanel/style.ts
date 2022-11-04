import styled from 'styled-components';

import curImg from '@/images/cat.gif';

export const LoginPanelStyled = styled.div`
  background-color: pink;

  background: url(${curImg}) no-repeat center center !important;
  /* opacity: 0.9; */
  background-size: 100% 100%;
  z-index: 99;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 340px;
  transform: translate(-50%, -50%);

  .loginTitle {
    text-align: center;
    margin: 25px auto;
    font-size: 20px;
    font-weight: 600;
  }

  .formDiv {
    background-color: pink;
    /* opacity: 0.6; */
  }

  .btns {
    margin-right: 16px;
    margin-top: 20px;
  }

  //特效
`;
