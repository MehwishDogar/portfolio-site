import React, { useState } from 'react';
import MenuItems from '../menuItems';
import HamburgerButton from '../HambugerButton';
import StyledMainmenu from './StyledMainmenu';

const MainMenu = () => {
  const [isOpen, open] = useState(false);
  const setOpen = () => {
    open(!isOpen);
  };
  return (
    <div>
      <HamburgerButton onClick={setOpen} />
      {isOpen && (
        <StyledMainmenu onClick={setOpen}>
          <MenuItems />
        </StyledMainmenu>
      )}
    </div>
  );
};

export default MainMenu;
