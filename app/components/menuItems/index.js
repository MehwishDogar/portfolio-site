import React from 'react';
import a from '../A';
import StyledMenuItems from './StyledMenuItems';

const menuItems = () => (
  <StyledMenuItems>
    <a href="/">Home & Contacts</a>
    <a href="/skills">Skills</a>
    <a href="/aboutme">About Me</a>
  </StyledMenuItems>
);

export default menuItems;
