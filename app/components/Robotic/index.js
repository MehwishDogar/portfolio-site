import React from 'react';
import PropTypes from 'prop-types';
import StyledRobotic from './StyledRobotic';

const Robotic = ({ roboticImg }) => (
  <StyledRobotic>
    <img src={roboticImg} alt="" />
  </StyledRobotic>
);

Robotic.propTypes = {
  roboticImg: PropTypes.string,
};

export default Robotic;
