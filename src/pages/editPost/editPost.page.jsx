import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/navBar/navBar.component';
import Rte from '../../components/rte/rte.component';

const EditPost = ({ editPost }) => {
  return (
    <div>
      <NavBar />
      <Rte editPost={editPost} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    editPost: state.user.editPost,
  };
};

export default connect(mapStateToProps)(EditPost);
