import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as S from './forgotPassword.style';

export const ForgotPassword = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    axios
      .post('http://localhost:1337/auth/forgot-password', {
        email: email,
      })
      .then((response) => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
        // REVIEW Better error handling later.
      });
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
      {isSubmitted ? (
        <S.SubmittedMsg>
          If the email address is valid, you shall receive an email.
          <br />
          Please check your inbox.
        </S.SubmittedMsg>
      ) : null}
    </S.ForgotPasswordFormWrapper>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(ForgotPassword);
