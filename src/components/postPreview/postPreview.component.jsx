import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setEditPost } from '../../redux/user/user.action';

import * as S from './postPreview.style';

const PostPreview = ({ post, allowEdit, history, setEditPost }) => {
  const { title, content, id } = post;

  const dangerousHTML = (content) => ({
    __html: content,
  });

  // Note that at present, browsers will not execute the script if inserted using the innerHTML property, and likely never will especially as the element is not added to the document.
  // Source: https://stackoverflow.com/questions/6659351/removing-all-script-tags-from-html-with-js-regular-expression

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content dangerouslySetInnerHTML={dangerousHTML(content)}></S.Content>
      {allowEdit ? (
        <S.ButtonEdit
          onClick={() => {
            setEditPost(post);
            history.push('/edit-post');
          }}
        >
          Edit
        </S.ButtonEdit>
      ) : null}
      <S.ButtonRead
        onClick={() => {
          history.push(`/posts/${id}`);
        }}
      >
        Read More
      </S.ButtonRead>
    </S.Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEditPost: (post) => dispatch(setEditPost(post)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(PostPreview));
