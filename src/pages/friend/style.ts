import styled from 'styled-components';

export const FriendStyled = styled.div`
  padding: 10px;

  .welcome-title {
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    color: #888;
  }

  .tips {
    text-align: center;
    h3 {
      font-weight: 700;
      color: #f65d21;
    }
  }

  .friend-container {
    margin: 0 auto;
    background: rgba(230, 220, 220, 0.6);
    height: 300px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    position: relative;
  }

  .say_top_tip {
    margin-top: 10px;
    color: rgb(32, 157, 123);
    text-align: center;
  }

  .comment_input_wrap {
    padding: 15px;

    .parting-line {
      height: 4px;
      border: 0;
      background-color: #ddd;
      margin: 20px 0;
      background-image: repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 0, transparent 8px);
    }
  }

  .input_and_submit {
    text-align: right;
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
