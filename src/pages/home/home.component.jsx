import React from 'react';

import NavBar from '../../components/navBar/navBar.component';

import * as S from './home.style';

const Home = () => {
  return (
    <div>
      <NavBar />
      <S.HomeContainer>This is the home page.</S.HomeContainer>
    </div>
  );
};

export default Home;
