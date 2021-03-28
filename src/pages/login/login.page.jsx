import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

import Loader from '../../components/loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';
import { storeUser } from '../../redux/user/user.action';

import * as S from './login.style';

export const Login = ({ storeUser, history, isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStateTrue();
    const email = e.target[0].value;
    const password = e.target[1].value;

    axios
      .post('http://localhost:1337/auth/local', {
        identifier: email,
        password: password,
      })
      .then((response) => {
        Cookies.set('jwt', response.data.jwt, { expires: 30, sameSite: 'strict' });
        storeUser(response.data.user);
        setLoadingStateFalse();
        history.push('/');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
        setLoadingStateFalse();
        // REVIEW Better error handling later.
      });
  };

  return (
    <S.LoginFormWrapper>
      <S.LoginForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <S.HeaderContainer>
          <S.Logo />
          <S.CompanyName>COWY</S.CompanyName>
        </S.HeaderContainer>
        <S.Title>Login</S.Title>
        <S.Input type='email' placeholder='Email' required />
        <S.Input type='password' placeholder='Password' required />
        <S.LoginButton type='submit'>Login</S.LoginButton>
        <S.ForgotPassword
          onClick={() => {
            history.push('/forgotpassword');
          }}
        >
          Forgot Password
        </S.ForgotPassword>
        <S.Back to='/'>Back to home</S.Back>
        <S.LoaderWrapper>{isLoading ? <Loader /> : null}</S.LoaderWrapper>
      </S.LoginForm>
    </S.LoginFormWrapper>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  storeUser: (user) => dispatch(storeUser(user)),
  setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
  setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
