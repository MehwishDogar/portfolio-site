import { css } from 'styled-components';

const aboutmetabsStyles = css`
  display: inline-block;
  border-top: 5px solid #e6e6fa;
  white-space: nowrap;
  margin-top: 50px;
  min-width: 120px;
  & span {
    display: inline-block;
    background-color: #5f9ea0;
    transform: scale(1.618);
    border-radius: 50%;
    position: relative;
    bottom: 28px;
    width: 47px;
    height: 47px;
    line-height: 47px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 60%;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
  & span:hover {
    background-color: #191970;
    width: 52px;
    height: 52px;
    font-size: 70%;
    transition: 1s;
  }
`;

export default aboutmetabsStyles;
