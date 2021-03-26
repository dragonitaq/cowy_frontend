import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';

import NavBar from '../../components/navBar/navBar.component';
import PostPreview from '../../components/postPreview/postPreview.component';

import { setUserPosts } from '../../redux/user/user.action';

import * as S from './myPosts.style';

const Posts = ({ user, posts, setUserPosts }) => {
  // componentdidmount - run only once
  useEffect(() => {
    const cookies = Cookies.get('jwt');
    axios
      .get(`http://localhost:1337/posts/?users_permissions_user=${user.id}`, { headers: { Authorization: `Bearer ${cookies}` } })
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <S.Container>
        <S.Title>My Posts</S.Title>
        <S.PostContainer>
          {posts.map((post) => (
            <PostPreview post={post} allowEdit={true} key={post.id} />
          ))}
        </S.PostContainer>
      </S.Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    posts: state.user.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserPosts: (posts) => dispatch(setUserPosts(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
