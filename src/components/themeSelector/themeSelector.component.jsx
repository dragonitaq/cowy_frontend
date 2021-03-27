import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { hideThemeOptionPopup, toggleThemeOptionPopup } from '../../redux/ui/ui.action';
import { toggleTheme } from '../../redux/theme/theme.action';

import * as S from './themeSelector.style';

const ThemeSelector = ({ showThemeOptionPopup, hideThemeOptionPopup, toggleThemeOptionPopup, toggleTheme }) => {
  const profileOptionPopupClickHandler = (e) => {
    if (e.target.closest('#themeBtn')) {
      toggleThemeOptionPopup();
      return;
    }
    hideThemeOptionPopup();
  };

  useEffect(() => {
    document.addEventListener('click', profileOptionPopupClickHandler);
    return () => {
      document.removeEventListener('click', profileOptionPopupClickHandler);
    };
  }, []);

  return (
    <S.ThemeContainer id='themeBtn'>
      <S.ThemeTitle>Theme</S.ThemeTitle>
      <S.DownArrow showThemeOptionPopup={showThemeOptionPopup} />
      {showThemeOptionPopup ? (
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

const mapStateToProps = (state) => ({
  showThemeOptionPopup: state.ui.showThemeOptionPopup,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
  hideThemeOptionPopup: () => dispatch(hideThemeOptionPopup()),
  toggleThemeOptionPopup: () => dispatch(toggleThemeOptionPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector);
