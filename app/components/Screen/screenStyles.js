import { css } from 'styled-components';

const screenStyles = css`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  & div {
    position: relative;
    bottom: 20px;
  }
`;

export default screenStyles;
