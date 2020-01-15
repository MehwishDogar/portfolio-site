import React from 'react';
import Img from '../Img';
import StyledAvatar from './StyledAvatar';
import avatarIcon from '../../images/avatar-icon.png';

const Avatar = () => (
  <StyledAvatar>
    <Img src={avatarIcon} alt="" />
  </StyledAvatar>
);

export default Avatar;
