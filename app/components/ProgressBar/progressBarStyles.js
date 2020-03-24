import { css } from 'styled-components';

const progressBarStyles = css`
  position: relative;
  margin: 3px;
  width: 30px;
  cursor: pointer;
  background-color: #212121;
  display: inline-block;
  border-radius: 10px;
  height: 200px;
  overflow: hidden;
  & :nth-child(2n + 1) > span {
    background: #87ceeb;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & :nth-child(3n + 1) > span {
    background: #00fa9a;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & > span {
    position: absolute;
    bottom: -2px;
    display: block;
    height: 0%;
    width: 30px;
    background-color: #cd5c5c;
    border-radius: 10px;
    transition: 2s all;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & > div {
    position: absolute;
    bottom: -2px;
    transform: rotate(-90deg);
    transform-origin: left top;
    height: 20px;
    width: 100px;
    font-family: sans-serif;
    font-weight: bold;
    line-height: 1.6;
  }
  @keyframes slidevertical {
    0% {
      transform: scaleY(0);
    }
    70% {
      transform: scaleY(1.02);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export default progressBarStyles;
