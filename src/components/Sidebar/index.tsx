import React, { ReactElement } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  NavItem,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarBtn,
  SidebarRoute,
} from './styled';

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return (
    <SidebarContainer isOpen={false}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavItem>
            <SidebarLink to="about">About</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="discover">Discover</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="services">Services</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="signup">Services</SidebarLink>
          </NavItem>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
