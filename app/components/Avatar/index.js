import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './StyledAvatar';
import { BASE_BACKEND_URL } from '../../utils/constants';

const Avatar = ({ thumbnail }) => (
  <StyledAvatar>
    <img src={`${BASE_BACKEND_URL}${thumbnail}`} alt="" />
  </StyledAvatar>
);

Avatar.propTypes = {
  thumbnail: PropTypes.string,
};

export default Avatar;
