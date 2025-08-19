import React from "react";
import data from "../data";
import Container from "./Container";
import styled from "styled-components";

const Works = () => {
  return (
    <StyledContainer
      data-aos="flip-up"
      data-aos-duration="1500"
      data-aos-offset="50"
    >
      <StyledHeading>{data.home.works.headeing}</StyledHeading>
      <img src={data.home.works.image.src} alt="" />
      {data.home.works.description}
    </StyledContainer>
  );
};

export default Works;

const StyledHeading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

const StyledContainer = styled(Container)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  margin-bottom: 50px;
`;
