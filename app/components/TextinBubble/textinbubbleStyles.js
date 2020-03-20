import { css } from 'styled-components';

const textinbubbleStyles = css`
  position: absolute;
  background: #212121;
  color: #fff;
  border-radius: 7px;
  bottom: 100px;
  right: 150px;
  max-width: 230px;
  max-height: 120px;
  padding: 15px;
  z-index: 1;
  & :after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    max-width: 0;
    max-height: 0;
    border: 15px solid transparent;
    border-left-color: #212121;
    border-right: 0;
    margin-top: -15px;
    margin-right: -15px;
    z-index: 1;
  }
`;

export default textinbubbleStyles;
