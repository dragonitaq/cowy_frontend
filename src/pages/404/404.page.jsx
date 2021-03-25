import React from 'react';

import * as S from './404.style';

const PageNotFound = () => {
  return (
    <S.Container>
      <S.NotFoundImg />
      <S.Title>A Dog Ate this Page</S.Title>
      <S.Description>There is no such page because the dog has eaten it.</S.Description>
      <S.Back to='/'>Back to home</S.Back>
    </S.Container>
  );
};

export default PageNotFound;
