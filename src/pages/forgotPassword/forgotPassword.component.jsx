import React from 'react';
import { connect } from 'react-redux';

import * as S from './forgotPassword.style';

export const ForgotPassword = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    // forgot password operation here.
  };

  return (
    <S.ForgotPasswordFormWrapper>
      <S.ForgotPasswordForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <S.HeaderContainer>
          <S.Logo />
          <S.CompanyName>COWY</S.CompanyName>
        </S.HeaderContainer>
        <S.Title>Forgot Password</S.Title>
        <S.EmailInput type='email' placeholder='Email' required />
        <S.ForgotPasswordButton type='submit'>Submit</S.ForgotPasswordButton>
      </S.ForgotPasswordForm>
    </S.ForgotPasswordFormWrapper>
  );
};

const mapDispatchToProps = () => ({});

export default connect(null, mapDispatchToProps)(ForgotPassword);
