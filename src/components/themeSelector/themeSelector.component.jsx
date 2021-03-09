import React from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../../redux/theme/theme.action';
import * as S from './themeSelector.style';

const ThemeSelector = ({ toggleTheme }) => {
  return (
    <S.ThemeContainer>
      <S.ThemeTitle>Theme</S.ThemeTitle>
      <S.ThemeSelectionContainer>
        <S.ThemeSelection
          type='radio'
          name='theme'
          value='light'
          defaultChecked='true'
          onClick={() => {
            toggleTheme('light');
          }}
        />
        <S.ThemeLabel for='light'>Light</S.ThemeLabel>
        <S.ThemeSelection
          type='radio'
          name='theme'
          value='sepia'
          onClick={() => {
            toggleTheme('sepia');
          }}
        />
        <S.ThemeLabel for='sepia'>Sepia</S.ThemeLabel>
        <S.ThemeSelection
          type='radio'
          name='theme'
          value='dark'
          onClick={() => {
            toggleTheme('dark');
          }}
        />
        <S.ThemeLabel for='dark'>Dark</S.ThemeLabel>
      </S.ThemeSelectionContainer>
    </S.ThemeContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
  };
};

export default connect(null, mapDispatchToProps)(ThemeSelector);
