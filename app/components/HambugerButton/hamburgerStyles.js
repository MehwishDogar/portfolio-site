import { css } from 'styled-components';

const hamburgerStyles = css`
  position: absolute;
  max-height: 90px;
  top: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 5;
  & > img {
    min-width: 70px;
  }
`;

export default hamburgerStyles;
