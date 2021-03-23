import React from 'react';

import NavBar from '../../components/navBar/navBar.component';
import Rte from '../../components/rte/rte.component';

import * as S from './compose.style';

const Compose = () => {
  const content = '';
  return (
    <div>
      <NavBar />
      <S.ContainerWrapper>
        <S.Container>
          <S.Title>Compose</S.Title>
          <Rte content={content} />
        </S.Container>
      </S.ContainerWrapper>
    </div>
  );
};

export default Compose;
