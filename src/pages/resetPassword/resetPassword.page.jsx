import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import * as S from './resetPassword.style';

const ForgotPassword = ({ history }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (process.env.NODE_ENV === 'production') {
      axios
        .post('https://cowy-strapi.herokuapp.com/auth/reset-password', {
          code: code,
          password: password,
          passwordConfirmation: confirmPassword,
        })
        .then((response) => {
          history.push('/login');
        })
        .catch((error) => {
          console.log('An error occurred:', error.response);
          // REVIEW Better error handling later.
        });
      return;
    }
    axios
      .post('http://localhost:1337/auth/reset-password', {
        code: code,
        password: password,
        passwordConfirmation: confirmPassword,
      })
      .then((response) => {
        history.push('/login');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
        // REVIEW Better error handling later.
      });
  };

  return (
    <S.ResetPasswordFormWrapper>
      <S.ResetPasswordForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <S.HeaderContainer>
          <S.Logo />
          <S.CompanyName>COWY</S.CompanyName>
        </S.HeaderContainer>
        <S.Title>Reset Password</S.Title>
        <S.Input type='password' placeholder='New Password' required />
        <S.Input type='password' placeholder='Re-enter New Password' required />
        <S.ResetPasswordButton type='submit'>Submit</S.ResetPasswordButton>
        <S.Back to='/'>Back to home</S.Back>
      </S.ResetPasswordForm>
    </S.ResetPasswordFormWrapper>
  );
};

export default withRouter(ForgotPassword);
