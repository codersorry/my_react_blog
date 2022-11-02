import styled from 'styled-components';

export const SayStyled = styled.div`
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
`;
