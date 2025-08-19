import React from "react";
import Container from "./Container";
import styled from "styled-components";
import theme from "./../Theme/theme";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLeft>
          <h2>TRUNG NGUYEN</h2>
          <p>Nice to meet you all</p>
          <p>
            Email:{" "}
            <a className="email" href="mailto:trungnguyen1221999@gmail.com">
              trungnguyen1221999@gmail.com
            </a>
          </p>
          <p>Phone: 0123456</p>
        </StyledLeft>
        <StyledRight>
          <h3>CONNECT WITH ME</h3>
          <StyledIconDiv>
            <a>
              {" "}
              <img src="images/fb.png" alt="" />
            </a>
            <a>
              {" "}
              <img src="images/insta.png" alt="" />
            </a>
            <a>
              <img src="images/whatsapp.png" alt="" />
            </a>
          </StyledIconDiv>
        </StyledRight>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  .email {
    cursor: pointer;
    opacity: 0.9;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 0;
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    transition: 0.3s !important;
  }
  img:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: translateY(-20px);
  }
`;
