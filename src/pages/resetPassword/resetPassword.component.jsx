import React from 'react';
import { connect } from 'react-redux';

import * as S from './resetPassword.style';

const ForgotPassword = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const confirmPassword = e.target[1].value;

    if (password !== confirmPassword) {
      alert("Password doesn't match");
    } else {
      alert('Password Matched!');
      // Update new password operation here.
    }
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

const mapDispatchToProps = () => ({});

export default connect(null, mapDispatchToProps)(ForgotPassword);
