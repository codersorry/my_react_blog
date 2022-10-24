import styled from 'styled-components';

export const BlogMainStyled = styled.div`
  .comm-left {
    background-color: #fff;
    padding: 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid #eee;
  }
  .comm-box {
    background-color: #fff;
    margin-left: 0.5rem;
    padding: 0.3rem;
    border-radius: 0.3rem;
    border: 1px solid #eee;
  }
  .comm-main {
    margin-top: 4rem;
  }

  .right-bar {
    min-width: 200px;
    animation: 'move_right 0.6s ease-in';
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid #f2ebeb;
    box-shadow: 0 0 10px white;
    border-radius: 5px;
    width: 15%;
  }

  @keyframes move_right {
    0% {
      transform: translateX(110%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
