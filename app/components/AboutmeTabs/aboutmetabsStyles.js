import { css } from 'styled-components';

const aboutmetabsStyles = css`
  display: inline-block;
  border-top: 5px solid #111;
  white-space: nowrap;
  margin-top: 50px;
  min-width: 120px;
  & span {
    display: inline-block;
    background-color: #888;
    transform: scale(1.618);
    border-radius: 50%;
    position: relative;
    bottom: 28px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 70%;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;

export default aboutmetabsStyles;
