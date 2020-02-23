import { css } from 'styled-components';

const avatarStyles = css`
  width: 110px;
  height: 110px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  & img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    border: 2px solid #000;
  }
`;

export default avatarStyles;
