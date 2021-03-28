import React from 'react';

import * as S from './loader.style';

const Loader = () => {
  return (
    <S.LoaderContainer>
      <S.Loader>
        <S.LoaderOverlay />
      </S.Loader>
    </S.LoaderContainer>
  );
};

export default Loader;
