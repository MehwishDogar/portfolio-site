import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './StyledAvatar';

const Avatar = ({ thumbnail }) => (
  <StyledAvatar>
    <img src={thumbnail} alt="" />
  </StyledAvatar>
);

Avatar.propTypes = {
  thumbnail: PropTypes.string,
};

export default Avatar;
