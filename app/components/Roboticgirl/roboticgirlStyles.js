import { css } from 'styled-components';

const roboticgirlStyles = css`
  position: absolute;
  z-index: 6;
  bottom: 15px;
  right: 15px;
  animation: 1s slidein;
  & img {
    max-height: 250px;
    min-height: 100px;
    right: 10px;
    bottom: 60px;
  }
  @keyframes slidein {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

export default roboticgirlStyles;
