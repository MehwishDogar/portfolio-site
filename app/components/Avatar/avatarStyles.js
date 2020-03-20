import { css } from 'styled-components';

const avatarStyles = css`
  width: 125px;
  height: 125px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  & img {
    max-width: 125px;
    max-height: 125px;
    border-radius: 50%;
    border: 2px solid #000;
    animation: slide 1s ease-out 1 both;
  }
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

export default avatarStyles;
