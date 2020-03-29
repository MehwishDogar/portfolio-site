import React from 'react';
import Img from '../Img';
import StyledBackgroundImage from './StyledBackgroundImage';
import Background from '../../images/background1.png';

const BackgroundImage = () => (
  <StyledBackgroundImage>
    <Img src={Background} alt="" />
  </StyledBackgroundImage>
);

export default BackgroundImage;
