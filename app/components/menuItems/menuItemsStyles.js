import { css } from 'styled-components';

const menuItemsStyles = css`
  display: block;

  & a {
    display: block;
    color: #000;
    font-size: 1.618em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default menuItemsStyles;
