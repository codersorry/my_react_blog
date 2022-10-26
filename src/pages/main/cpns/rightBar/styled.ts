import { RightBarShowType } from '@/store/reducers/main';
import styled from 'styled-components';

type RightBarStyledPropsType = {
  showRightBar: RightBarShowType;
};

export const RightBarStyled = styled.div<RightBarStyledPropsType>`
  .right-author {
    animation: ${(props) => (props.showRightBar.showAuthor ? 'show 0.6s ease-in' : 'hide 0.6s ease-in')};
  }

  .right-tags {
    animation: ${(props) => (props.showRightBar.showTags ? 'show 0.6s ease-in' : 'hide 0.6s ease-in')};
  }

  @keyframes show {
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

  @keyframes hide {
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
