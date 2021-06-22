import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar({ toggle }) { 
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> DEL <br /> RIO </NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuIcon fontSize="large" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  background-color: #000;
  height: 90px;
  // margin-top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
  margin-right: 2rem;
  
`

const NavLogo = styled(LinkRouter) `
  color: var(--color-borders);
  justify-self: flex-start;  
  cursor: pointer;  
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.4rem; 
  transition-duration: 0.2s;
  transition-property: transform;  
    
    &:hover {
      transform: scale(1.1);
    }
`

const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: var(--color-title);
  }
`

const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li `
  height: 80px;
`

const NavLinks = styled(LinkScroll) `
    color: var(--color-subtitle);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    transition-duration: 0.2s;
    transition-property: transform; 
    
    &:hover {
      border-bottom: 2px solid var(--color-borders);
      transform: scale(1.1);
      color: var(--color-title);
    }
    
`