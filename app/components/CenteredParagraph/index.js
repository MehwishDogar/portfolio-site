import React from 'react';
import { PropTypes } from 'prop-types';
import StyledCenterParagraph from './StyledCenterParagraph';

const CenteredParagraph = ({ paragraph }) => (
  <StyledCenterParagraph>{paragraph}</StyledCenterParagraph>
);

CenteredParagraph.propTypes = {
  paragraph: PropTypes.string,
};
export default CenteredParagraph;
