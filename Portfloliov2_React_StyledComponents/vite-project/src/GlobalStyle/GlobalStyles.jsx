import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
export default GlobalStyle;
