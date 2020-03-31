import { css } from 'styled-components';

const backgroundImageStyles = css`
  position: absolute;
  top: 5%;
  left: 0px;
  z-index: auto;
  opacity: 0.3;
  & > img {
    max-height: 80%;
    max-width: 80%;
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
  @media (max-width: 600px) {
    top: 20%;
    max-height: 100%;
    max-width: 100%;
  }
`;

export default backgroundImageStyles;
