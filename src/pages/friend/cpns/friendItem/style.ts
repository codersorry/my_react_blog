import styled from 'styled-components';

type FriendStyledStyledProps = {
  styles: { r: number; g: number; b: number; mt: number; ml: number; dur: number };
};

export const FriendStyledStyled = styled.div<FriendStyledStyledProps>`
  height: 60px;
  width: 120px;
  border-radius: 8px;
  position: absolute;
  cursor: pointer;

  color: black;
  font-size: 18px;
  text-align: center;
  line-height: 30px;

  background-color: ${(props) => `rgba(${props.styles.r},${props.styles.g},${props.styles.b},1)`};
  box-shadow: ${(props) =>
    `inset -7px -3px 10px rgba(${props.styles.r - 10},${props.styles.g - 10},${props.styles.b - 10},1)`};

  left: ${(props) => `${props.styles.ml}px`};
  top: ${(props) => `${props.styles.mt}px`};

  animation: ${(props) => `float ${props.styles.dur}s ease-in infinite`};

  &:hover {
    /* running 运行
   paused 停止 */
    animation-play-state: paused;
  }
`;
