import styled from 'styled-components';

export const FriendStyled = styled.div`
  .friend-container {
    margin: 100px auto;
    background-color: pink;
    height: 300px;
    width: 50vw;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    position: relative;
  }

  @keyframes float {
    from {
      transform: translateY(80px);
      opacity: 1;
    }
    to {
      transform: translateY(-150px);
      opacity: 0;
    }
  }
`;
