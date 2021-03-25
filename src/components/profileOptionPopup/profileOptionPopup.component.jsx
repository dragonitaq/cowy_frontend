import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import { removeUser } from '../../redux/user/user.action';

import * as S from './profileOptionPopup.style';

const ProfileOptionPopup = ({ removeUser }) => {
  const handleLogout = () => {
    removeUser();
    Cookies.remove('jwt');
  };
  return (
    <S.Container>
      <S.ContainerLink to='/myprofile'>My Profile</S.ContainerLink>
      <S.ContainerLink to='/myposts'>My Posts</S.ContainerLink>
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

const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
});

export default connect(null, mapDispatchToProps)(ProfileOptionPopup);
