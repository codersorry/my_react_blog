import styled from 'styled-components';

export const NotFoundStyled = styled.div`
  p {
    font-family: 'Comfortaa', cursive;
    font-size: 30px;
    text-align: center;
    padding: 50px 0;
  }
  a {
    color: red;
    text-decoration: none;
  }
  .not-found {
    margin-top: 100px;
    margin-bottom: 30px;
    font-family: 'Comfortaa', cursive;
    font-size: 24px;
    padding: 10px 50px;
  }
  .tipsiz {
    /* height: 50vh; */

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    flex-direction: column;
  }
  .tipsiz-body {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .arm {
    align-self: flex-end;
    width: 50px;
    height: 90px;
    border-top: 3px solid black;
  }
  .left-arm {
    border-right: 3px solid black;
    transform: skew(20deg);
  }
  .right-arm {
    border-left: 3px solid black;
    transform: skew(-20deg);
  }

  .face {
    width: 300px;
    height: 200px;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 15px;
  }
  .upper-face {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 80px;
    margin-left: 80px;
  }
  .element {
    font-size: 60px;
  }
  .mouth {
    width: 20px;
    height: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border: 3px solid black;
    border-bottom: 0;
  }
`;
