import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../../redux/theme/theme.action';
import * as S from './themeSelector.style';

const ThemeSelector = ({ toggleTheme }) => {
  const [showThemeOption, setShowThemeOption] = useState(false);

  return (
    <S.ThemeContainer
      onClick={() => {
        setShowThemeOption(!showThemeOption);
      }}
    >
      <S.ThemeTitle>Theme</S.ThemeTitle>
      <S.DownArrow />
      {showThemeOption ? (
        <S.ThemeOptionPopup>
          <S.ThemeOption
            onClick={() => {
              toggleTheme('light');
            }}
          >
            Light
          </S.ThemeOption>
          <S.ThemeOption
            onClick={() => {
              toggleTheme('sepia');
            }}
          >
            Sepia
          </S.ThemeOption>
          <S.ThemeOption
            onClick={() => {
              toggleTheme('dark');
            }}
          >
            Dark
          </S.ThemeOption>
        </S.ThemeOptionPopup>
      ) : null}
    </S.ThemeContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
});

export default connect(null, mapDispatchToProps)(ThemeSelector);
