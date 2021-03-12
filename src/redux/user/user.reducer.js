const initialState = {
  user: null,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'storeUser':
      return { user: payload };
    case 'removeUser':
      return { user: null };

    default:
      return state;
  }
};

export default user;
