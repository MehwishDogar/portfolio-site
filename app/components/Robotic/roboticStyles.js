import { css } from 'styled-components';

const roboticgirlStyles = css`
  position: absolute;
  z-index: 1;
  bottom: 10px;
  right: 10px;
  text-align: right;
  padding: 20px;
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
