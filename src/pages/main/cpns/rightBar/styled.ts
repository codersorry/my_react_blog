import { RightBarShowType } from '@/store/reducers/main';
import styled from 'styled-components';

type RightBarStyledPropsType = {
  showRightBar: RightBarShowType;
};

export const RightBarStyled = styled.div<RightBarStyledPropsType>`
  .right-author {
    transform: ${(props) => (props.showRightBar.showAuthor ? 'translateX(0)' : 'translateX(110%)')};
    animation: ${(props) => (props.showRightBar.showAuthor ? 'show 0.5s ease-in' : 'hide 0.6s ease-in')};
  }

  .right-tags {
    transform: ${(props) => (props.showRightBar.showTags ? 'translateX(0)' : 'translateX(110%)')};
    animation: ${(props) => (props.showRightBar.showTags ? 'show 0.8s ease-in' : 'hide 0.6s ease-in')};
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
      transform: translateX(0);
    }
    /* 50% {
      transform: translateX(10%);
    }
    75% {
      transform: translateX(0);
    } */
    100% {
      transform: translateX(110%);
    }
  }
`;
