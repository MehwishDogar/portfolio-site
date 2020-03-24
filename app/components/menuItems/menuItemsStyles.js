import { css } from 'styled-components';

const menuItemsStyles = css`
  display: block;
  text-align: center;
  & a {
    display: block;
    color: #000;
    font-size: 28px;
    font-weight: 600;
    text-decoration: none;
    padding-top: 20px;
    padding-bottom: 20px;
    &:hover {
      cursor: pointer;
      color: #fff;
      font-weight: 900;
      font-size: 32px;
      text-decoration: underline;
    }
    &:active {
      text-decoration: underline;
    }
  }
`;

export default menuItemsStyles;
