import { css } from 'styled-components';

const socialIconsStyles = css`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  background: #1a659e;
  display: inline-block;
  background-image: linear-gradient(to right, #25aae1, #3f86ed);
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  & img {
    height: 44px;
  }
`;

export default socialIconsStyles;
