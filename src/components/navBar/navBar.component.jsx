import React from 'react';
import { connect } from 'react-redux';

import ThemeSelector from '../themeSelector/themeSelector.component';

import * as S from './navBar.style';

const NavBar = (props) => {
  return (
    <S.NavBarContainer>
      <S.Logo />
      <S.CompanyName>COWY</S.CompanyName>
      <S.Login href='/login'>Login</S.Login>
      <S.Register href='/register'>Register</S.Register>
      <ThemeSelector />
    </S.NavBarContainer>
  );
};

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(NavBar);
