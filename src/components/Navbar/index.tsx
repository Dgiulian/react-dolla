import React, { ReactElement } from 'react';
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

export default function Navbar(): ReactElement {
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">dolla</NavbarLogo>
        <MenuButton>
          <FaBars />
        </MenuButton>
        <NavMenu>
          <NavItem>
            <NavLink className="active" to="about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover">Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup">Services</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}
