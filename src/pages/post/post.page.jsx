import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

import NavBar from '../../components/navBar/navBar.component';

import * as S from './post.style';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const dangerousHTML = () => ({
    __html: post.content,
  });

  const cookies = Cookies.get('jwt');
  axios
    .get(`http://localhost:1337/posts/${id}`, { headers: { Authorization: `Bearer ${cookies}` } })
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <NavBar />
      <S.ContainerWrapper>
        <S.Container>
          <S.Title>{post.title}</S.Title>
          <S.Content dangerouslySetInnerHTML={dangerousHTML()}></S.Content>
        </S.Container>
      </S.ContainerWrapper>
    </div>
  );
};

export default Post;