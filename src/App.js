import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
// Even with Helmet v6, still get UNSAFE_componentWillMount warning in StrictMode. I checked the version of react-side-effect that react-helmet depends on is 2.1.0. This should be no issue but still got warning. No idea  why.
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './pages/home/home.page';
import Login from './pages/login/login.page';
import Register from './pages/register/register.page';
import ForgotPassword from './pages/forgotPassword/forgotPassword.page';
import ResetPassword from './pages/resetPassword/resetPassword.page';
import Profile from './pages/myProfile/myProfile.page';
import MyPosts from './pages/myPosts/myPosts.page';
import Compose from './pages/compose/compose.page';
import EditPost from './pages/editPost/editPost.page';
import Post from './pages/post/post.page';
import PageNotFound from './pages/404/404.page';

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
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/forgot-password'>
              <ForgotPassword />
            </Route>
            <Route exact path='/reset-password'>
              <ResetPassword />
            </Route>
            <Route exact path='/my-profile'>
              <Profile />
            </Route>
            <Route exact path='/my-posts'>
              <MyPosts />
            </Route>
            <Route exact path='/compose'>
              <Compose />
            </Route>
            <Route exact path='/edit-post'>
              <EditPost />
            </Route>
            <Route exact path='/posts/:id'>
              <Post />
            </Route>
            <Route path='/*'>
              <PageNotFound />
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
