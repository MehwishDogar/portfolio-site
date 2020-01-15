import React from 'react';
import Img from '../Img';
import StyledSocialIcons from './StyledSocialIcons';
import MailIcon from '../../images/mail-icon.png';

const SocialIcons = () => (
  <StyledSocialIcons href="">
    <Img src={MailIcon} alt="" />
  </StyledSocialIcons>
);

export default SocialIcons;
