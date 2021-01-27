import React from 'react';
import PropTypes from 'prop-types';
import TextinBubble from '../TextinBubble';
import StyledRobotic from './StyledRobotic';

const Robotic = ({ roboticImg }) => (
  <StyledRobotic>
    <TextinBubble />
    <img src={roboticImg} alt="" />
  </StyledRobotic>
);

Robotic.propTypes = {
  roboticImg: PropTypes.string,
};

export default Robotic;
