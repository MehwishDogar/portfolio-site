import { css } from 'styled-components';

const aboutmetabsStyles = css`
  border-top: 1px solid grey;
  margin-top: 100px;
  display: inline-block;
  background: whitesmoke;

  .timeline {
    position: relative;
    margin-right: 15px;
    top: -65px;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    background: royalblue;
    color: black;
    font-size: 24px;
    display: inline-block;
    text-align: center;
    padding: 45px 0;
    white-space: nowrap;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
  .active {
    width: 150px;
    height: 150px;
    top: -75px;
    background: pink;
    vertical-align: top;
    padding: 55px 0;
  }
  .done {
    background: inherit;
    border-radius: 0;

    @media (max-width: 600px) {
      &:not(:last-child) {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    :not(.next:first-child) {
      display: none;
    }
  }
`;

export default aboutmetabsStyles;
