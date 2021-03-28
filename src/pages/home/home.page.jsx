import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';
import PostPreview from '../../components/postPreview/postPreview.component';
import Loader from '../../components/loader/loader.component';
import { toggleLoadingState } from '../../redux/ui/ui.action';

import * as S from './home.style';

const Home = ({ toggleLoadingState, isLoading }) => {
  const [searchValue, setSearchValue] = useState('');
  const [postsResult, setPostsResult] = useState([]);

  useEffect(() => {
    toggleLoadingState();
    axios
      .get('http://localhost:1337/posts')
      .then((response) => {
        console.log(response);
        toggleLoadingState();
        setPostsResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findPosts = () => {
    toggleLoadingState();
    axios
      .get(`http://localhost:1337/posts/?title_contains=${searchValue}`)
      .then((response) => {
        console.log(response);
        toggleLoadingState();
        setPostsResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        {isLoading ? (
          <Loader />
        ) : (
          <S.PostPreviewContainer>
            {postsResult.map((post) => (
              <PostPreview post={post} allowEdit={false} key={post.id} />
            ))}
          </S.PostPreviewContainer>
        )}
      </S.HomeContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLoadingState: () => dispatch(toggleLoadingState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
