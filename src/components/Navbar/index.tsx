import React, { ReactElement, useEffect, useState } from 'react';
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  MenuButton,
  NavItem,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './syled';
import { FaBars } from 'react-icons/fa';
import { useScrollNav } from '../../hooks/useScrollNav';
import { IconContext } from 'react-icons/lib';
interface Props {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: Props): ReactElement {
  const scrollNav = useScrollNav(180);
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to="/">dolla</NavbarLogo>
          <MenuButton onClick={() => onMenuClick()}>
            <FaBars />
          </MenuButton>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
