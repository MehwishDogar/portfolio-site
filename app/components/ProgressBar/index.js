import React from 'react';
import { PropTypes } from 'prop-types';
import StyledProgressBar from './StyledProgressBar';

const ProgressBar = ({ name, percentage }) => (
  <StyledProgressBar>
    <div style={{ width: `${percentage}%` }}>{name}</div>
  </StyledProgressBar>
);

ProgressBar.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.number,
};

export default ProgressBar;
