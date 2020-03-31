import { css } from 'styled-components';

const aboutmetabsStyles = css`
  display: inline-block;
  border-top: 5px solid #e6e6fa;
  white-space: nowrap;
  margin-top: 50px;
  min-width: 120px;
  & span {
    display: inline-block;
    background-color: #27496d;
    transform: scale(1.618);
    border-radius: 50%;
    position: relative;
    bottom: 28px;
    width: 49px;
    height: 49px;
    line-height: 47px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 60%;
    & :not(first-child) {
      margin-left: 5px;
    }
  }
  & span:hover {
    background-color: #191970;
    font-weight: 700;
  }
`;

export default aboutmetabsStyles;
