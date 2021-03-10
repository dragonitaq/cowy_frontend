import React from 'react';
import { connect } from 'react-redux';

import * as S from './login.style';

export const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    // Login operation here.
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

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(Login);
