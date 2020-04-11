import { css } from 'styled-components';

const roboticgirlStyles = css`
  position: absolute;
  z-index: 1;
  bottom: 15px;
  right: 15px;
  text-align: right;
  padding: 50px;
  @media (max-width: 600px) {
    position: relative;
    bottom: unset;
    right: unset;
    margin-top: 20px;
    padding: 0;
  }
  & img {
    max-height: 300px;
    min-height: 150px;
  }
`;

export default roboticgirlStyles;
