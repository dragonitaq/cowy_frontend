import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

import { storeUser } from '../../redux/user/user.action';

import * as S from './login.style';

export const Login = ({ storeUser, history }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        history.push('/');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
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
        <S.EmailInput type='email' placeholder='Email' required />
        <S.PasswordInput type='password' placeholder='Password' required />
        <S.LoginButton type='submit'>Login</S.LoginButton>
        <S.ForgotPassword href='/forgotpassword'>Forgot Password</S.ForgotPassword>
      </S.LoginForm>
    </S.LoginFormWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  storeUser: (user) => dispatch(storeUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
