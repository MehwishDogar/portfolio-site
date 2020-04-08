import { css } from 'styled-components';

const screenStyles = css`
  display: table;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
  & > div {
    display: table-cell;
    vertical-align: middle;
    min-height: 100%;
    min-width: 100%;
    padding: 100px 20px 200px;
    @media (max-width: 600px) {
      padding: 70px 0px 0px;
    }
  }
`;

export default screenStyles;
