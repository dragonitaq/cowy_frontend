import React from 'react';
import { connect } from 'react-redux';

import * as S from './register.style';

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (password === confirmPassword) {
      // handle submit operation here.
    } else {
      alert('Password not matched.');
    }
  };

  return (
    <S.RegisterFormWrapper>
      <S.RegisterForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <S.HeaderContainer>
          <S.Logo />
          <S.CompanyName>COWY</S.CompanyName>
        </S.HeaderContainer>
        <S.Title>Register</S.Title>
        <S.NameInput type='text' placeholder='Name' required />
        <S.EmailInput type='email' placeholder='Email' required />
        <S.PasswordInput type='password' placeholder='Password' required />
        <S.ConfirmPasswordInput type='password' placeholder='Re-enter Password' required />
        <S.RegisterButton type='submit'>Register</S.RegisterButton>
      </S.RegisterForm>
    </S.RegisterFormWrapper>
  );
};

const mapDispatchToProps = () => ({});

export default connect(null, mapDispatchToProps)(Register);
