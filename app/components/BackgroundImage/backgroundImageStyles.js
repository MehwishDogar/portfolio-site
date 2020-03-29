import { css } from 'styled-components';

const backgroundImageStyles = css`
  position: absolute;
  top: 5px;
  left: 0px;
  z-index: auto;
  opacity: 0.3;
  & > img {
    max-height: 80%;
    max-width: 70%;
    animation: 3s linear 1s infinite alternate running slideimg;
  }
  @keyframes slideimg {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

export default backgroundImageStyles;
