import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;
