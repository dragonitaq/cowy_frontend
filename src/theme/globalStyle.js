import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* React logged this message: 
  Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.
  So I use react-helmet instead. */
  /* @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap'); */

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
