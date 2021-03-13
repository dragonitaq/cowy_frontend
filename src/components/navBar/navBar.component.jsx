import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import { removeUser } from '../../redux/user/user.action';
import ThemeSelector from '../themeSelector/themeSelector.component';

import * as S from './navBar.style';

const NavBar = ({ user, removeUser, history }) => {
  const handleLogout = () => {
    removeUser();
    Cookies.remove('jwt');
    history.push('/');
  };

  return (
    <S.NavBarContainer>
      <S.Logo />
      <S.CompanyName>COWY</S.CompanyName>
      {Cookies.get('jwt') ? (
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
        /* Use comma in ternary operator to do multiple fn and the logic behind explained here:
          https://stackoverflow.com/questions/6678411/javascript-ternary-operator-with-multiple-statements 
          But the way React accept comma operator is kinda weird. But it works. */
        (removeUser(),
        (
          <div>
            <S.Login to='/login'>Login</S.Login>
            <S.Register to='/register'>Register</S.Register>
          </div>
        ))
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
