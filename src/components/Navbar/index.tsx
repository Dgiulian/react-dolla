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
import { useScrollNav } from '../../hooks/useScrollNav';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
interface Props {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: Props): ReactElement {
  const scrollNav = useScrollNav(180);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to="/" onClick={() => scrollToTop()}>
            dolla
          </NavbarLogo>
          <MenuButton onClick={() => onMenuClick()}>
            <FaBars />
          </MenuButton>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Services
              </NavLink>
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
