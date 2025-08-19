import React from "react";
import Nav from "./Nav";
import { StyledHeader } from "../styled/StyledHeader";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "./../Theme/theme";

const Header = () => {
  const [menuToggleOpen, setMenuToggleOpen] = React.useState(false);

  return (
    <StyledHeader>
      <NavLink to="/">
        <Logo>Trung Nguyen</Logo>
      </NavLink>
      <Nav />
      <MenuIcon>
        <button onClick={() => setMenuToggleOpen(!menuToggleOpen)}>☰</button>
      </MenuIcon>
      {menuToggleOpen && (
        <MobileNAv>
          <button onClick={() => setMenuToggleOpen(!menuToggleOpen)}>✖</button>
          <NavLink onClick={() => setMenuToggleOpen(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setMenuToggleOpen(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setMenuToggleOpen(false)} to="/contact">
            Contact
          </NavLink>
        </MobileNAv>
      )}
    </StyledHeader>
  );
};

export default Header;

const Logo = styled.h2`
  transition: 0.3s;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
    scale: 0.9;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: bold;
  }
`;
const MobileNAv = styled.div`
  display: none;
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 999;
    gap: 40px;
    padding: 20px;

    a {
      text-transform: uppercase;
      font-weight: bold;
    }
    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      font-weight: bold;
    }
  }
`;
