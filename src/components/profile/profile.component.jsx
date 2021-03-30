import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProfileOptionPopup from '../profileOptionPopup/profileOptionPopup.component';
import { hideProfileOptionPopup, toggleProfileOptionPopup } from '../../redux/ui/ui.action';

import * as S from './profile.style';

const Profile = ({ user, showProfileOptionPopup, hideProfileOptionPopup, toggleProfileOptionPopup }) => {
  const profileOptionPopupClickHandler = (e) => {
    if (e.target.closest('#profileBtn')) {
      toggleProfileOptionPopup();
      return;
    }
    hideProfileOptionPopup();
  };

  useEffect(() => {
    document.addEventListener('click', profileOptionPopupClickHandler);
    // Mimic componentWillUnmount
    return () => {
      document.removeEventListener('click', profileOptionPopupClickHandler);
    };
  }, []);

  return (
    <S.ProfileContainer id='profileBtn'>
      <S.ProfileName>{`${user.username}`}</S.ProfileName>
      <S.DownArrow showProfileOptionPopup={showProfileOptionPopup} />
      {showProfileOptionPopup ? <ProfileOptionPopup /> : null}
    </S.ProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  showProfileOptionPopup: state.ui.showProfileOptionPopup,
});

const mapDispatchToProps = (dispatch) => ({
  hideProfileOptionPopup: () => {
    dispatch(hideProfileOptionPopup());
  },
  toggleProfileOptionPopup: () => {
    dispatch(toggleProfileOptionPopup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
