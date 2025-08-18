import React from "react";
import data from "./../data";
import styled from "styled-components";
const Icon = () => {
  return (
    <StyledIcon>
      <StyledImage src={data.home.header.icon.programming.src} />
      <StyledImage src={data.home.header.icon.ecommerce.src} />
      <StyledImage src={data.home.header.icon.travel.src} />
    </StyledIcon>
  );
};

export default Icon;

const StyledImage = styled.img`
  width: 150px;
  object-fit: cover;
  transition: 0.6s !important;

  &:hover {
    transform: translateY(-20px);
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const StyledIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
