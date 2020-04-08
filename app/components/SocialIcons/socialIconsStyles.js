import { css } from 'styled-components';

const socialIconsStyles = css`
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  & img {
    height: 50px;
  }
  @media (max-width: 600px) {
    margin: 3px;
  }
`;

export default socialIconsStyles;
