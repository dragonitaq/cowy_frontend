import React, { useState } from 'react';
import { connect } from 'react-redux';

import ProfileOptionPopup from '../profileOptionPopup/profileOptionPopup.component';

import * as S from './profile.style';

const Profile = ({ user }) => {
  const [showProfileOption, setShowProfileOption] = useState(false);

  return (
    <S.ProfileContainer
      onClick={() => {
        setShowProfileOption(!showProfileOption);
      }}
    >
      <S.ProfileName>{`${user.username}`}</S.ProfileName>
      {/* Weird warning msg: React does not recognize the `showProfileOption` prop on a DOM element. 🤷‍♀️*/}
      <S.DownArrow showProfileOption={showProfileOption} />
      {showProfileOption ? <ProfileOptionPopup /> : null}
    </S.ProfileContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Profile);
