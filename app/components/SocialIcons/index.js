import React from 'react';
import Img from '../Img';
import StyledSocialIcons from './StyledSocialIcons';
import MailIcon from '../../images/mail-icon.png';
import LinkedinIcon from '../../images/linkedin-icon.png';

const SocialIcons = () => (
  <StyledSocialIcons href="">
    <Img src={MailIcon} alt="" />
    <Img src={LinkedinIcon} alt="" />
  </StyledSocialIcons>
);

export default SocialIcons;
