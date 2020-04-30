import { css } from 'styled-components';

const textinbubbleStyles = css`
  position: relative;
  background: #212121;
  color: #fff;
  border-radius: 7px;
  display: inline-block;
  text-align: left;
  margin-right: 15px;
  max-width: 250px;
  padding: 10px;
  z-index: 1;
  animation: move 5s infinite;
  background-image: linear-gradient(to right, #364e68, #132238);
  & :after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    max-width: 0;
    max-height: 0;
    border: 15px solid transparent;
    border-left-color: #132238;
    border-right: 0;
    margin-top: -15px;
    margin-right: -15px;
    z-index: 1;
    background-image: linear-gradient(to right, #364e68, #132238);
  }
  @media (max-width: 600px) {
    max-width: 200px;
    bottom: unset;
    right: unset;
  }
`;

export default textinbubbleStyles;
