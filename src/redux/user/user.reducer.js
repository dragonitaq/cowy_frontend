const initialState = {
  user: null,
  posts: null,
  editPost: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'storeUser':
      return { ...state, user: payload };
    // Make sure user info all removed when logout.
    case 'removeUser':
      return { ...initialState };
    case 'setUserPosts':
      return { ...state, posts: payload };
    case 'setEditPost':
      return { ...state, editPost: payload };
    default:
      return state;
  }
};

export default user;
