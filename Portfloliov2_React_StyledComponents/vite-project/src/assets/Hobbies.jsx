import React, { useState } from "react";
import data from "../data";
import Container from "./Container";
import styled from "styled-components";
import theme from "./../Theme/theme";

const Hobbies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container>
      <StyledHeading>{data.home.hobbies.heading}</StyledHeading>
      <StyledSection>
        {data.home.hobbies.section.map((item, index) => (
          <HobbyButton
            active={activeIndex === index}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </HobbyButton>
        ))}
      </StyledSection>
      <div>
        <StyledHobbiesDetail>
          <StyledImages>
            <img src={data.home.hobbies.images[activeIndex]} alt="" />
          </StyledImages>

          <p>{data.home.hobbies.description.title[activeIndex]}</p>

          <p> {data.home.hobbies.description.detail[activeIndex]}</p>
        </StyledHobbiesDetail>
      </div>
    </Container>
  );
};

export default Hobbies;
const HobbyButton = styled.div`
  font-weight: bold;
  background-color: ${({ active }) =>
    active ? theme.colors.primary : "white"};
  color: ${({ active }) => (active ? "white" : theme.colors.primary)};
  border: 1px solid ${theme.colors.primary};
  width: 100px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const StyledHeading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid ${theme.colors.primary};
    transition: 0.3s ease all;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const StyledHobbiesDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  background-color: ${theme.colors.primary};
  padding: 30px 20px 60px;
  border-radius: 10px;
  p {
    color: white;
  }
  p:nth-of-type(1) {
    font-weight: bold;
  }
`;
