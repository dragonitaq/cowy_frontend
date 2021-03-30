import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    max-width: 1440px;

    @media (max-width: 750px) {
    font-size: 60%;
  }
    @media (max-width: 650px) {
    font-size: 55%;
  }
  }
  
  body {
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;
