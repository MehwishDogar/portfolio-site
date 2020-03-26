import React from 'react';
import PropTypes from 'prop-types';
import StyledRobotic from './StyledRobotic';
import { BASE_BACKEND_URL } from '../../utils/constants';

const Robotic = ({ roboticImg }) => (
  <StyledRobotic>
    <img src={`${BASE_BACKEND_URL}${roboticImg}`} alt="" />
  </StyledRobotic>
);

Robotic.propTypes = {
  roboticImg: PropTypes.string,
};

export default Robotic;
