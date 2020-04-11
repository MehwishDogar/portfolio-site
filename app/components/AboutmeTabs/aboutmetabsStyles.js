import { css } from 'styled-components';

const aboutmetabsStyles = css`
  display: inline-block;
  & span {
    display: inline-block;
    background-color: #27496d;
    border-radius: 50%;
    position: relative;
    width: 50px;
    height: 50px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 60%;
    transition: 2s width, height;
    .active {
      width: 55px;
      height: 55px;
    }
    & :not(first-child) {
      margin-left: 5px;
    }
  }
  & span:hover {
    background-color: #191970;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    & span {
      display: none;
    }
    & span.mobile-visible {
      display: inline-block;
      opacity: 0.7;
    }
  }
`;

export default aboutmetabsStyles;
