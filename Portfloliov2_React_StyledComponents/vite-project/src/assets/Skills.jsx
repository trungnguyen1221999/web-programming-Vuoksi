import React from "react";
import data from "../data";
import styled from "styled-components";
import theme from "./../Theme/theme";

const Skills = () => {
  return (
    <StyledSkills>
      <h2>{data.home.skills.heading}</h2>
      <div className="skills">
        <img src={data.home.skills.skillImage.html.src} alt="" />
        <img src={data.home.skills.skillImage.css.src} alt="" />
        <img src={data.home.skills.skillImage.js.src} alt="" />
        <img src={data.home.skills.skillImage.react.src} alt="" />
        <img src={data.home.skills.skillImage.ecommerce.src} alt="" />
      </div>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  padding: 40px 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  h2 {
    text-transform: uppercase;
    color: white;
  }
  img {
    width: 150px;
    transition: 0.5s !important;
    @media (max-width: 768px) {
      width: 110px;
    }
  }
  img:hover {
    opacity: 0.9;
    cursor: pointer;
    scale: 1.25;
  }
  .skills {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 60px;
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, auto);
      column-gap: 100px;
      row-gap: 40px;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
  }
  @media (max-width: 768px) {
    .skills img:last-child:nth-child(odd) {
      grid-column: span 2;
      justify-self: center;
    }
  }
`;
