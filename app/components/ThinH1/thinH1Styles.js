import { css } from 'styled-components';

const thinH1Styles = css`
  font-weight: 400;
  font-size: 32px;
  animation: slide 1s ease-out 1 both;
  @keyframes slide {
    from {
      opacity: 0;
      transform: perspective(500px) translate3d(-35px, -40px, -150px)
        rotate3d(1, -1, 0, 35deg);
    }
    to {
      opacity: 1;
      transform: perspective(500px) translate3d(0, 0, 0);
    }
  }
`;

export default thinH1Styles;
