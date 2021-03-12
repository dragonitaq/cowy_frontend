import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as S from './resetPassword.style';

const ForgotPassword = () => {
  const history = useHistory();

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
        <S.PasswordInput type='password' placeholder='New Password' required />
        <S.ConfirmPasswordInput type='password' placeholder='Re-enter New Password' required />
        <S.ResetPasswordButton type='submit'>Submit</S.ResetPasswordButton>
      </S.ResetPasswordForm>
    </S.ResetPasswordFormWrapper>
  );
};

export default ForgotPassword;
