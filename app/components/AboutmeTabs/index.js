import React from 'react';
import { PropTypes } from 'prop-types';
import StyledAboutmeTabs from './StyledAboutmeTabs';

const AboutmeTabs = ({ name, onClick }) => (
  <StyledAboutmeTabs onClick={onClick}>
    <span>{name}</span>
  </StyledAboutmeTabs>
);

AboutmeTabs.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default AboutmeTabs;
