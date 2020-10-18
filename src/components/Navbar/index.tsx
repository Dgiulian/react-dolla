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
interface Props {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: Props): ReactElement {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);
  return (
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
  );
}
