import React from 'react';
import propTypes from 'prop-types';
import Styledscreen from './Styledscreen';

const Screen = ({ children }) => (
  <Styledscreen>
    <div>{children}</div>
  </Styledscreen>
);

Screen.propTypes = {
  children: propTypes.node,
};

export default Screen;
