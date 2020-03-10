import React from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import StyledHamburger from './StyledHamburger';
import Icon from '../../images/menu-icon.png';

const HamburgerButton = ({ onClick }) => (
  <StyledHamburger onClick={onClick}>
    <Img src={Icon} alt="" />
  </StyledHamburger>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerButton;
