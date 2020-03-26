import React from 'react';
import PropTypes from 'prop-types';
import StyledSocialIcons from './StyledSocialIcons';
import { BASE_BACKEND_URL } from '../../utils/constants';

const SocialIcons = ({ logo, url }) => (
  <StyledSocialIcons>
    <a href={url} target="_blank">
      <img src={`${BASE_BACKEND_URL}${logo}`} alt="" />
    </a>
  </StyledSocialIcons>
);

SocialIcons.propTypes = {
  logo: PropTypes.string,
  url: PropTypes.string,
};

export default SocialIcons;
