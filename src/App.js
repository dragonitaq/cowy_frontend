import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './pages/home/home.component';

// Theme
import { lightTheme, sepiaTheme, darkTheme } from './theme/theme';
import { GlobalStyle } from './theme/globalStyle';

function App({ theme }) {
  const themeSwitcher = () => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'sepia':
        return sepiaTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  return (
    <div>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap' rel='stylesheet' />
      </Helmet>
      <ThemeProvider theme={themeSwitcher()}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(App);