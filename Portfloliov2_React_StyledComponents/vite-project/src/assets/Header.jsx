import React from "react";
import Nav from "./Nav";
import { StyledHeader } from "../styled/StyledHeader";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <Logo>Trung Nguyen</Logo>{" "}
      </NavLink>
      <Nav />
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
