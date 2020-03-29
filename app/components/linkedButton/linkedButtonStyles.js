import { css } from 'styled-components';

const linkedButtonStyles = css`
  display: inline-block;
  padding: 10px 10px;
  margin: 0px 5px;
  border-radius: 10px;
  text-align: center;
  background: #1a659e;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  min-width: 40px;
  cursor: pointer;
  border: 2px solid paleturquoise;
  background-image: linear-gradient(to right, #25aae1, #3f86ed);
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  animation: attention 1s ease-out 5 alternate;
  & :hover > div {
    display: block;
    background-image: linear-gradient(to right, #25aae1, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }
  & > div {
    display: none;
    position: absolute;
    background-color: #c0c0c0;
    min-width: 160px;
    z-index: 1;
    margin-top: 12px;
    margin-left: -10px;
    & > a {
      color: #111111;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      border-bottom: 1px solid #808080;
      & :hover {
        background-image: linear-gradient(to right, #30dd8a, #2bb673);
        box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
        color: #fff;
      }
    }
  }
  @keyframes attention {
    0% {
      outline: 1px solid;
      outline-color: rgba(255, 255, 255, 0.5);
      outline-offset: 0px;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
    }
    50%,
    75% {
      box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);
    }
    100% {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 10px;
    }
  }
`;

export default linkedButtonStyles;
