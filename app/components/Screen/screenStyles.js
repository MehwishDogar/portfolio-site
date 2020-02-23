import { css } from 'styled-components';

const screenStyles = css`
  display: table;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  & > div {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    padding: 0px 20px 200px;
  }
`;

export default screenStyles;
