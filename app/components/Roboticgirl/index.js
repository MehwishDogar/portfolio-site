import React from 'react';
import PropTypes from 'prop-types';
import StyledRoboticgirl from './StyledRoboticgirl';
import roboticIcon from '../../images/robotic.png';

const Roboticgirl = ({ onClick }) => (
  <StyledRoboticgirl onClick={onClick}>
    <img src={roboticIcon} alt="" />
  </StyledRoboticgirl>
);

Roboticgirl.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Roboticgirl;
