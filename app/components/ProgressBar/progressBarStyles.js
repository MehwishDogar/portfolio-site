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
    background: #1fab89;
    background: linear-gradient(-45deg, #5c8d89, #a0edf7, #dbff3d, #0ea5c6);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & :nth-child(3n + 1) > span {
    background: #5c3b6f;
    background: linear-gradient(-45deg, #f16f6f, #ef5a5a, #ffb997, #264e70);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & > span {
    position: absolute;
    bottom: -2px;
    display: block;
    height: 0%;
    width: 30px;
    transform: translateZ(0);
    transform-origin: bottom center;
    background-color: #ff4057;
    background: linear-gradient(-45deg, #e61c5d, #5c3b6f, #ffe98a, #90007f);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    border-radius: 10px;
    transition: 2s all;
    animation: slidevertical 1s linear 0s 1 normal none running;
  }
  & > div {
    position: relative;
    top: 98%;
    transform: rotate(-90deg);
    transform-origin: left top;
    height: 20px;
    width: 130px;
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
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default progressBarStyles;
