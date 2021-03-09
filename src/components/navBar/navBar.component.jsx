import React from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../../redux/theme/theme.action';
import ThemeSelector from '../themeSelector/themeSelector.component';

import * as S from './navBar.style';

const NavBar = ({ toggleTheme }) => {
  return (
    <S.NavBarContainer>
      <S.Logo />
      <S.CompanyName>COWY</S.CompanyName>
      <ThemeSelector />
    </S.NavBarContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
