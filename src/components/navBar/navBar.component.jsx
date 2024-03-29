import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

import ThemeSelector from '../themeSelector/themeSelector.component';
import Profile from '../profile/profile.component';
import { removeUser } from '../../redux/user/user.action';

import * as S from './navBar.style';

const NavBar = ({ removeUser, history }) => {
  return (
    <S.NavBarContainer>
      <S.Logo
        onClick={() => {
          history.push('/');
        }}
      />
      <S.CompanyName
        onClick={() => {
          history.push('/');
        }}
      >
        COWY
      </S.CompanyName>
      {/* Have to do this initial checking to see if the cookie is expired (browser will auto delete expired cookies). If yes, remove all user data from redux store. */}
      {Cookies.get('jwt') ? (
        <Profile />
      ) : (
        /* Use comma in ternary operator to do multiple fn and the logic behind explained here:
          https://stackoverflow.com/questions/6678411/javascript-ternary-operator-with-multiple-statements 
          But the way React accept comma operator is kinda weird, it needs extra brackets. But it works. */
        (removeUser(),
        (
          <div>
            <S.Anchor to='/login'>Login</S.Anchor>
            <S.Anchor to='/register'>Register</S.Anchor>
          </div>
        ))
      )}
      <ThemeSelector />
    </S.NavBarContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
