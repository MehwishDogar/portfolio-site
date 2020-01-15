import { css } from 'styled-components';

const progressBarStyles = css`
  position: relative;
  width: 240px;
  cursor: pointer;
  transform: rotateZ(-90deg);
  background-color: #212121;
  display: inline-block;
  border-radius: 10px;
  height: 30px;
  & div {
    overflow: hidden;
    height: 30px;
    width: 0%;
    background-color: #ef6;
    border-radius: 10px;
    text-align: center;
    transform-origin: bottom-center;
    transition: 2s all;
  }
`;

export default progressBarStyles;
