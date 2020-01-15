import React from 'react';
import Img from '../Img';
import StyledHamburger from './StyledHamburger';
import Icon from '../../images/menu-icon.png';

const HamburgerButton = () => (
  <StyledHamburger>
    <Img src={Icon} alt="" />
  </StyledHamburger>
);

export default HamburgerButton;
