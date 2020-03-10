import React from 'react';
import PropTypes from 'prop-types';
import StyledSocialIcons from './StyledSocialIcons';

const SocialIcons = ({ logo }) => <StyledSocialIcons>{logo}</StyledSocialIcons>;

SocialIcons.propTypes = {
  logo: PropTypes.string,
};

export default SocialIcons;
