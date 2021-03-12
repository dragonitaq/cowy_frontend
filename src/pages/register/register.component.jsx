import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import { storeUser } from '../../redux/user/user.action';

import * as S from './register.style';

export const Register = ({ storeUser }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    axios
      .post('http://localhost:1337/auth/local/register', {
        username: name,
        email: email,
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

const mapDispatchToProps = (dispatch) => ({
  storeUser: (user) => dispatch(storeUser(user)),
});

export default connect(null, mapDispatchToProps)(Register);
