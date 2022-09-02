import styled from 'styled-components'

interface AuthorStyledPropsType {
  avatRotate?: number
}

export const AuthorStyled = styled.div<AuthorStyledPropsType>`
  text-align: center;
  padding: 1rem;

  div {
    margin-bottom: 1rem;
  }
  .author-introduction {
    font-size: 0.8rem;
    color: #999;
  }
  .account {
    background-color: #999;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .my_avat {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: all 0.5s linear;
    transform: ${(props) => `rotate(${props.avatRotate}deg)`};
    animation: shadow 2s infinite;
    img {
      width: 100%;
    }
    @keyframes shadow {
      0% {
        box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px purple, 0 0 5px purple, 0 0 11px pink;
      }
      100% {
        box-shadow: 0 0 5px #fff, 0 0 10px #ff0, 0 0 15px #ff0, 0 0 8px green, 0 0 10px green, 0 0 12px #00f;
      }
    }
  }
`
