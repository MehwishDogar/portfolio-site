import React from 'react';
import PropTypes from 'prop-types';
import StyledSocialIcons from './StyledSocialIcons';

const SocialIcons = ({ logo, url }) => (
  <StyledSocialIcons>
    <a href={url} target="_blank">
      {logo}
    </a>
  </StyledSocialIcons>
);

SocialIcons.propTypes = {
  logo: PropTypes.string,
  url: PropTypes.string,
};

export default SocialIcons;
