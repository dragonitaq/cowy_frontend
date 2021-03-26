import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';
import Rte from '../../components/rte/rte.component';

import * as S from './editPost.style';

const EditPost = ({ editPost }) => {
  return (
    <div>
      <NavBar />
      <S.ContainerWrapper>
        <S.Container>
          <S.Title>Compose</S.Title>
          <Rte editPost={editPost} />
        </S.Container>
      </S.ContainerWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editPost: state.user.editPost,
  };
};

export default connect(mapStateToProps)(EditPost);
