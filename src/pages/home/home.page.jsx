import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';
import PostPreview from '../../components/postPreview/postPreview.component';
import Loader from '../../components/loader/loader.component';
import { setLoadingStateTrue, setLoadingStateFalse } from '../../redux/ui/ui.action';

import * as S from './home.style';

const Home = ({ isLoading, setLoadingStateTrue, setLoadingStateFalse }) => {
  const [searchValue, setSearchValue] = useState('');
  const [postsResult, setPostsResult] = useState([]);

  useEffect(() => {
    setLoadingStateTrue();
    if (process.env.NODE_ENV === 'production') {
      axios
        .get('https://cowy-strapi.herokuapp.com/posts')
        .then((response) => {
          setLoadingStateFalse();
          setPostsResult(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }
    axios
      .get('http://localhost:1337/posts')
      .then((response) => {
        setLoadingStateFalse();
        setPostsResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findPosts = () => {
    setLoadingStateTrue();
    if (process.env.NODE_ENV === 'production') {
      axios
        .get(`https://cowy-strapi.herokuapp.com/posts/?title_contains=${searchValue}`)
        .then((response) => {
          setLoadingStateFalse();
          setPostsResult(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    axios
      .get(`http://localhost:1337/posts/?title_contains=${searchValue}`)
      .then((response) => {
        setLoadingStateFalse();
        setPostsResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const responseToReturnData = (postsResult) => {
    if (postsResult.length === 0) {
      return <S.NoData>Ops... There seem to be no such content.</S.NoData>;
    }
    return (
      <S.PostPreviewContainer>
        {postsResult.map((post) => (
          <PostPreview post={post} allowEdit={false} key={post.id} />
        ))}
      </S.PostPreviewContainer>
    );
  };

  return (
    <div>
      <NavBar />
      <S.HomeContainer>
        <S.Title>Welcome To COWY!</S.Title>
        <S.Description>A simple blogging website.</S.Description>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            findPosts();
          }}
        >
          <S.Search
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <S.SearchButton>Search Title</S.SearchButton>
        </S.Form>
        {isLoading ? <Loader /> : responseToReturnData(postsResult)}
      </S.HomeContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
