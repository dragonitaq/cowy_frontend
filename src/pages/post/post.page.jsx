import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';
import Loader from '../../components/loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';

import * as S from './post.style';

const Post = ({ isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const dangerousHTML = () => ({
    __html: post.content,
  });

  const responseToReturnData = (post) => {
    if (Object.keys(post).length === 0) {
      return <S.NoData>Ops... There seem to be no such content.</S.NoData>;
    }
    return (
      <div>
        <S.Title>{post.title}</S.Title>
        <S.Author>{`Author: ${post.users_permissions_user.username}`}</S.Author>
        <S.Content dangerouslySetInnerHTML={dangerousHTML()}></S.Content>
      </div>
    );
  };

  useEffect(() => {
    setLoadingStateTrue();
    if (process.env.NODE_ENV === 'production') {
      axios
        .get(`https://cowy-strapi.herokuapp.com/posts/${id}`)
        .then((response) => {
          setPost(response.data);
          setLoadingStateFalse();
        })
        .catch((error) => {
          console.log(error);
          setLoadingStateFalse();
        });
      return;
    }
    axios
      .get(`http://localhost:1337/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoadingStateFalse();
      })
      .catch((error) => {
        console.log(error);
        setLoadingStateFalse();
      });
  }, []);

  return (
    <div>
      <NavBar />
      <S.ContainerWrapper>
        <S.Container>{isLoading ? <Loader /> : responseToReturnData(post)}</S.Container>
      </S.ContainerWrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setLoadingStateTrue: () => dispatch(setLoadingStateTrue()),
  setLoadingStateFalse: () => dispatch(setLoadingStateFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
