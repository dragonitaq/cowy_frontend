import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { removeUser } from '../../redux/user/user.action';
import ThemeSelector from '../themeSelector/themeSelector.component';

import * as S from './navBar.style';

const NavBar = ({ user, removeUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    removeUser();
    Cookies.remove('jwt');
    history.push('/');
  };

  return (
    <S.NavBarContainer>
      <S.Logo />
      <S.CompanyName>COWY</S.CompanyName>
      {user ? (
        <div>
          <S.ProfileName>{`${user.username}`}</S.ProfileName>
          <S.Logout
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </S.Logout>
        </div>
      ) : (
        <div>
          <S.Login
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </S.Login>
          <S.Register
            onClick={() => {
              history.push('/register');
            }}
          >
            Register
          </S.Register>
        </div>
      )}
      <ThemeSelector />
    </S.NavBarContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
