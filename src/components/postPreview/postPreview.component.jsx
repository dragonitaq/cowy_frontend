import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './postPreview.style';

const PostPreview = ({ title, htmlContent, allowEdit, id, history }) => {
  const dangerousHTML = () => ({
    __html: htmlContent,
  });

  // Note that at present, browsers will not execute the script if inserted using the innerHTML property, and likely never will especially as the element is not added to the document.
  // Source: https://stackoverflow.com/questions/6659351/removing-all-script-tags-from-html-with-js-regular-expression

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content dangerouslySetInnerHTML={dangerousHTML()}></S.Content>
      {allowEdit ? (
        <div>
          <S.ButtonEdit>Edit</S.ButtonEdit>{' '}
          <S.ButtonRead
            onClick={() => {
              history.push(`/posts/${id}`);
            }}
          >
            Read More
          </S.ButtonRead>
        </div>
      ) : (
        <S.ButtonRead>Read More</S.ButtonRead>
      )}
    </S.Container>
  );
};

export default withRouter(PostPreview);
