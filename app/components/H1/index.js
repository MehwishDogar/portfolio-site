import React from 'react';
import PropTypes from 'prop-types';
import StyledH1 from './StyledH1';

const H1 = ({ title }) => <StyledH1>{title}</StyledH1>;

H1.propTypes = {
  title: PropTypes.string,
};

export default H1;
