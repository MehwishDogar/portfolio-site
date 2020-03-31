import { css } from 'styled-components';

const roboticgirlStyles = css`
  position: absolute;
  z-index: 6;
  bottom: 15px;
  right: 15px;
  @media (max-width: 600px) {
    position: relative;
    float: right;
  }
  & img {
    max-height: 300px;
    min-height: 150px;
    bottom: 60px;
    float: right;
    float: bottom;
  }
`;

export default roboticgirlStyles;
