import React, { useState } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';

import * as S from './profile.style';

const Profile = ({ user }) => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div>
      <NavBar />
      <S.MainContainerWrapper>
        <S.MainContainer>
          <S.Title>My Profile</S.Title>

          {!showEditor ? (
            <S.DetailContainer>
              <S.DetailGrouper>
                <S.Detail>Name: {`${user.username}`}</S.Detail>
                <S.Detail>Email: {`${user.email}`}</S.Detail>
              </S.DetailGrouper>
              <S.Change
                onClick={() => {
                  setShowEditor(!showEditor);
                }}
              >
                <span>Change</span>
              </S.Change>
            </S.DetailContainer>
          ) : (
            <S.DetailEditorContainer>
              <S.DetailEditorGrouper>
                <S.EditorLabel>Name:</S.EditorLabel>
                <S.Input type='text' />
                <S.EditorLabel>Email:</S.EditorLabel>
                <S.Input type='email' />
                <S.Msg>Leave the field empty if you want it to remain unchanged.</S.Msg>
              </S.DetailEditorGrouper>
              <S.DetailActionGrouper>
                <S.Save>
                  <span>Save</span>
                </S.Save>
                <S.Cancel
                  onClick={() => {
                    setShowEditor(!showEditor);
                  }}
                >
                  <span>Cancel</span>
                </S.Cancel>
              </S.DetailActionGrouper>
            </S.DetailEditorContainer>
          )}

          {/* Password management */}
          <S.PasswordContainer>
            <S.PasswordTitle>Password</S.PasswordTitle>
            <S.Label>Existing password:</S.Label>
            <S.Input type='password' required />
            <S.Label>New password:</S.Label>
            <S.Input type='password' required />
            <S.Label>Re-enter new password:</S.Label>
            <S.Input type='password' required />
            <S.Update>
              <span>Update</span>
            </S.Update>
          </S.PasswordContainer>
        </S.MainContainer>
      </S.MainContainerWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   storeUser: (user) => dispatch(storeUser(user)),
// });

export default connect(mapStateToProps)(Profile);
