import { css } from 'styled-components';

const aboutmetabsStyles = css`
  display: inline-block;
  border-top: 5px solid #111;
  white-space: nowrap;
  margin-top: 50px;
  min-width: 300px;
  & span {
    display: inline-block;
    background-color: #888;
    transform: scale(1.618);
    border-radius: 50%;
    position: relative;
    bottom: 28px;
    width: 41.875px;
    height: 41.875px;
    line-height: 41.875px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 70%;
    &:not(:first-child) {
      margin-left: 50px;
    }
  }
`;

export default aboutmetabsStyles;
