const initialState = {
  user: null,
  posts: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'storeUser':
      return { ...state, user: payload };
    case 'removeUser':
      return { ...initialState };
    case 'setUserPosts':
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export default user;
