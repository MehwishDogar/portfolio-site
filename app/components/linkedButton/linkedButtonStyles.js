import { css } from 'styled-components';

const linkedButtonStyles = css`
  display: inline-block;
  margin: 0px 10px;

  & a.button,
  div.dropdown {
    display: inline-block;
    padding: 10px 10px;
    margin: 0;
    text-align: center;
    background: #46b3e6;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    min-width: 40px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }

  & a.button {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation: attention 1s ease-out 5 alternate;
  }

  & div.dropdown {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & div.dropdown:hover > div {
    display: block;
    background-color: #25aae1;
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
  }
  & div.dropdown > div {
    display: none;
    position: absolute;
    background-color: #46b3e6;
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
        background-color: #1b2a49;
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
