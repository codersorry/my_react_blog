import styled from 'styled-components';

export const LoadingStyled = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;

  .cat {
    position: relative;
    width: 100%;
    max-width: 20em;
    overflow: hidden;
    background-color: #e6dcdc;
  }
  .cat::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  .cat:hover > * {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  .cat:active > * {
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  .cat__head,
  .cat__tail,
  .cat__body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
    animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  }
  .cat__head::before,
  .cat__tail::before,
  .cat__body::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url('https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il');
  }

  .cat__head::before {
    top: 0;
    right: 0;
    background-position: 100% 0%;
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .cat__tail {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .cat__tail::before {
    left: 0;
    bottom: 0;
    background-position: 0% 100%;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }

  .cat__body {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .cat__body:nth-of-type(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .cat__body::before {
    right: 0;
    bottom: 0;
    background-position: 100% 100%;
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
    to {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes rotating {
    from {
      -webkit-transform: rotate(720deg);
      transform: rotate(720deg);
    }
    to {
      -webkit-transform: none;
      transform: none;
    }
  }
  .box {
    width: 100vw;
    height: 100vh;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #e6dcdc;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
