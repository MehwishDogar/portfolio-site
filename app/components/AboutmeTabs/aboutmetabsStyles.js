import { css } from 'styled-components';

const aboutmetabsStyles = css`
  border-top: 2px solid #d2d0fe;
  margin-top: 100px;
  display: inline-block;
  background: #f0f8ff;

  .timeline {
    position: relative;
    margin-right: 15px;
    top: -50px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #233567;
    color: #fff;
    font-size: 24px;
    display: inline-block;
    text-align: center;
    padding: 30px 0;
    white-space: nowrap;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background: #315b96;
      border-radius: 50%;
    }
  }
  .active {
    width: 120px;
    height: 120px;
    top: -60px;
    background: #d35656;
    vertical-align: top;
    padding: 40px 0;
    &:hover {
      background: #d35656;
    }
  }
  .done {
    background: inherit;
    border-radius: 0;
    color: #000;
    &:hover {
      background: inherit;
      color: #000;
    }
  }

  @media (max-width: 600px) {
    :not(.next:first-child) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .timeline {
      margin-right: 10px;
      top: -40px;
      width: 80px;
      height: 80px;
      font-size: 18px;
      padding: 22px 0;
    }
  }
`;

export default aboutmetabsStyles;
