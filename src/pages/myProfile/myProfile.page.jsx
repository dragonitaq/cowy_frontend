import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

import NavBar from '../../components/navBar/navBar.component';
import Loader from '../../components/loader/loader.component';

import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';
import { removeUser, storeUser } from '../../redux/user/user.action';

import * as S from './myProfile.style';

const Profile = ({ user, history, removeUser, storeUser, isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const updatePassword = () => {
    setLoadingStateTrue();
    const cookies = Cookies.get('jwt');
    // I don't need to verify values of newPassword & confirmNewPassword because my backend covers it.
    const data = {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };
    axios
      .post('http://localhost:1337/user/change-password', data, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        setLoadingStateFalse();
        Cookies.remove('jwt');
        // Must push first before removeUser(). Because after removeUser, this component will re-render but there is no user obj anymore.
        history.push('/login');
        removeUser();
      })
      .catch((error) => {
        console.log(error);
        setLoadingStateFalse();
      });
  };

  const updateUserDetails = () => {
    setLoadingStateTrue();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cookies = Cookies.get('jwt');
    const data = {
      username: name,
      email,
    };
    axios
      .put(`http://localhost:1337/users/${user.id}`, data, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        setLoadingStateFalse();
        setShowUpdateSuccess(true);
        storeUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoadingStateFalse();
      });
  };

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
                <S.Input id='name' type='text' defaultValue={`${user.username}`} />
                <S.EditorLabel>Email:</S.EditorLabel>
                <S.Input id='email' type='email' defaultValue={`${user.email}`} />
                {showUpdateSuccess ? <S.Msg>Information updated successfully!</S.Msg> : null}
              </S.DetailEditorGrouper>
              <S.DetailActionGrouper>
                <S.Save onClick={updateUserDetails}>
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
            <S.Input
              type='password'
              required
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
            <S.Label>New password:</S.Label>
            <S.Input
              type='password'
              required
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <S.Label>Re-enter new password:</S.Label>
            <S.Input
              type='password'
              required
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
            />
            <S.Update
              onClick={() => {
                updatePassword();
              }}
            >
              <span>Update</span>
            </S.Update>
          </S.PasswordContainer>
          {isLoading ? <Loader /> : null}
        </S.MainContainer>
      </S.MainContainerWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
  setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
  removeUser: () => dispatch(removeUser()),
  storeUser: (user) => dispatch(storeUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
