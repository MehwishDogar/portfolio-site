import { css } from 'styled-components';

const linkedButtonStyles = css`
  display: inline-block;
  padding: 10px 10px;
  margin: 0px 5px;
  border-radius: 0.236em;
  background: #1a659e;
  border: none;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  min-width: 40px;
  cursor: pointer;
  & :hover > div {
    display: block;
  }
  & > div {
    display: none;
    position: absolute;
    background-color: #c0c0c0;
    min-width: 160px;
    z-index: 1;
    margin-top: 10px;
    margin-left: -10px;
    & > a {
      color: #111111;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      border-bottom: 1px solid #808080;
      & :hover {
        background-color: #696969;
      }
    }
  }
`;

export default linkedButtonStyles;
