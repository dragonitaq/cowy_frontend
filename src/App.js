import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle } from './theme/globalStyle';
import { toggleTheme } from './redux/theme/theme.action';

function App({ theme, toggleTheme }) {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap' rel='stylesheet' />
      </Helmet>
      <h1>Hello world!</h1>
      <button
        onClick={() => {
          toggleTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Theme toggler
      </button>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
  };
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
