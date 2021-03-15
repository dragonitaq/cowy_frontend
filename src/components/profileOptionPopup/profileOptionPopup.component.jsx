import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import { removeUser } from '../../redux/user/user.action';

import * as S from './profileOptionPopup.style';

const ProfileOptionPopup = ({ removeUser, history, user }) => {
  const handleLogout = () => {
    removeUser();
    Cookies.remove('jwt');
    history.push('/');
  };
  return (
    <S.Container>
      <S.ContainerLink to='/profile'>My Profile</S.ContainerLink>
      <S.ContainerLink to='/posts'>My Post</S.ContainerLink>
      <S.ContainerLink to='/compose'>Compose</S.ContainerLink>
      <S.ContainerLink
        to='/'
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </S.ContainerLink>
    </S.Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileOptionPopup));
