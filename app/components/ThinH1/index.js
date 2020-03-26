import React from 'react';
import PropTypes from 'prop-types';
import StyledThinH1 from './StyledThinH1';

const ThinH1 = ({ secondaryTitle }) => (
  <StyledThinH1>{secondaryTitle}</StyledThinH1>
);

ThinH1.propTypes = {
  secondaryTitle: PropTypes.string,
};

export default ThinH1;
