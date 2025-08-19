import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import About from "./../pages/About";

const Nav = () => {
  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  gap: 50px;

  text-transform: uppercase;
  a {
    transition: 0.3s;
  }
  a:hover {
    opacity: 0.8;
    scale: 0.9;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
