import React from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../../redux/theme/theme.action';
import * as S from './themeSelector.style';

const ThemeSelector = ({ theme, toggleTheme }) => {
  /* Solution from this post on SO:
  https://stackoverflow.com/questions/43079252/react-jsx-dynamic-html-attribute */
  const light = theme === 'light' ? { defaultChecked: 'true' } : null;
  const sepia = theme === 'sepia' ? { defaultChecked: 'true' } : null;
  const dark = theme === 'dark' ? { defaultChecked: 'true' } : null;

  return (
    <S.ThemeContainer>
      <S.ThemeTitle>Theme</S.ThemeTitle>
      <S.ThemeSelectionContainer>
        <S.ThemeSelection
          type='radio'
          name='theme'
          id='light'
          value='light'
          {...light}
          onClick={() => {
            toggleTheme('light');
          }}
        />
        <S.ThemeLabel htmlFor='light'>Light</S.ThemeLabel>
        <S.ThemeSelection
          type='radio'
          name='theme'
          id='sepia'
          value='sepia'
          {...sepia}
          onClick={() => {
            toggleTheme('sepia');
          }}
        />
        <S.ThemeLabel htmlFor='sepia'>Sepia</S.ThemeLabel>
        <S.ThemeSelection
          type='radio'
          name='theme'
          id='dark'
          value='dark'
          {...dark}
          onClick={() => {
            toggleTheme('dark');
          }}
        />
        <S.ThemeLabel htmlFor='dark'>Dark</S.ThemeLabel>
      </S.ThemeSelectionContainer>
    </S.ThemeContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme)),
});

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector);
