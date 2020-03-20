import { css } from 'styled-components';

const socialIconsStyles = css`
  padding: 10px;
  cursor: pointer;
  border-radius: 50%
  background-color: #1a659e;
  display: inline-block;
    & :only-child {
        max-width: 70px;
        max-height: 70px;
    }
`;

export default socialIconsStyles;
