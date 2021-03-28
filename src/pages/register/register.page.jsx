import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

import Loader from '../../components/loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';
import { storeUser } from '../../redux/user/user.action';

import * as S from './register.style';

export const Register = ({ storeUser, history, isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
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

    setLoadingStateTrue();
    axios
      .post('http://localhost:1337/auth/local/register', {
        username: name,
        email: email,
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
        <S.Input type='text' placeholder='Name' required />
        <S.Input type='email' placeholder='Email' required />
        <S.Input type='password' placeholder='Password' required />
        <S.Input type='password' placeholder='Re-enter Password' required />
        <S.RegisterButton type='submit'>Register</S.RegisterButton>
        <S.Back to='/'>Back to home</S.Back>
        <S.LoaderWrapper>{isLoading ? <Loader /> : null}</S.LoaderWrapper>
      </S.RegisterForm>
    </S.RegisterFormWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  storeUser: (user) => dispatch(storeUser(user)),
  setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
  setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
});

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
