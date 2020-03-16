import { css } from 'styled-components';

const screenStyles = css`
  display: table;
  position: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 100%;
  max-width: 100%;
  & > div {
    display: table-cell;
    vertical-align: middle;
    min-height: 100%;
    min-width: 100%;
    padding: 100px 20px 200px;
  }
`;

export default screenStyles;
