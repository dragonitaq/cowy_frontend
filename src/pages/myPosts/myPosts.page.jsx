import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';

import NavBar from '../../components/navBar/navBar.component';
import PostPreview from '../../components/postPreview/postPreview.component';
import Loader from '../../components/loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';

import { setUserPosts } from '../../redux/user/user.action';

import * as S from './myPosts.style';

const Posts = ({ user, posts, setUserPosts, isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
  useEffect(() => {
    setLoadingStateTrue();
    const cookies = Cookies.get('jwt');
    axios
      .get(`http://localhost:1337/posts/?users_permissions_user=${user.id}`, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        setUserPosts(response.data);
        setLoadingStateFalse();
      })
      .catch((error) => {
        console.log(error);
        setLoadingStateFalse();
      });
  }, []);

  const responseToReturnData = (posts) => {
    if (!posts) return;
    if (posts.length === 0) {
      return <S.NoData>Ops... There seem to be no such content.</S.NoData>;
    }
    return <S.PostContainer>{posts ? posts.map((post) => <PostPreview post={post} allowEdit={true} key={post.id} />) : null}</S.PostContainer>;
  };

  return (
    <div>
      <NavBar />
      <S.Container>
        <S.Title>My Posts</S.Title>
        {isLoading ? <Loader /> : responseToReturnData(posts)}
      </S.Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    posts: state.user.posts,
    isLoading: state.ui.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserPosts: (posts) => dispatch(setUserPosts(posts)),
    setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
    setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
