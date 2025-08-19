import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 2rem;
  padding: 20px 60px;
`;
