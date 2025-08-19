import React from "react";
import Container from "./Container";
import styled from "styled-components";
import theme from "./../Theme/theme";

const ContactSection = () => {
  return (
    <Container>
      <StyledHeading
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-offset="100"
      >
        CONTACT ME
      </StyledHeading>
      <StyledDiv>
        <StyledForm
          action=""
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-offset="100"
        >
          <input type="text" name="" id="" placeholder="Name" />
          <input type="text" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Phone Number" />
          <input type="text" name="" id="" placeholder="Comment" />
          <button>SUBMIT</button>
        </StyledForm>
        <img
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="100"
          src="/images/contact.png"
          alt=""
        />
      </StyledDiv>
    </Container>
  );
};

export default ContactSection;

const StyledHeading = styled.h2`
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  align-items: center;
  img {
    width: 400px;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 800px;
    @media (max-width: 1024px) {
      width: 400px;
    }
  }
  input:hover,
  input:focus,
  input:active {
    border: 1px solid ${({ theme }) => theme.colors.primary} !important;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: 0.4s;
  }
  button:hover {
    opacity: 0.9;
    scale: 0.9;
  }
`;
