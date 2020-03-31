import { css } from 'styled-components';

const textinbubbleStyles = css`
  position: absolute;
  background: #212121;
  color: #fff;
  border-radius: 7px;
  bottom: 100px;
  right: 150px;
  max-width: 250px;
  max-height: 150px;
  padding: 15px;
  z-index: 1;
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
    position: relative;
    right: 3px;
    bottom: 190px;
    max-width: 200px;
    max-height: 190px;
  }
`;

export default textinbubbleStyles;
