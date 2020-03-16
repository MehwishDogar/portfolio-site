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
  }
`;

export default avatarStyles;
