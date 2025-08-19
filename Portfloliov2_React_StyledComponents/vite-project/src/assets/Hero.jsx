import React from "react";
import Container from "./Container";
import data from "../data";
import styled from "styled-components";
import Icon from "./Icon";

const Hero = () => {
  return (
    <StyledHero>
      <Image
        data-aos="fade-right"
        data-aos-duration="1500"
        src="/images/Untitled design.png"
        alt=""
      />
      <div className="hero-right" data-aos="fade-left" data-aos-duration="1500">
        <h2>{data.home.header.title}</h2>
        <div>{data.home.header.description}</div>
        <Icon />
      </div>
    </StyledHero>
  );
};

export default Hero;

const Image = styled.img`
  object-fit: cover;
  width: 550px;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  gap: 120px;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
  .hero-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
