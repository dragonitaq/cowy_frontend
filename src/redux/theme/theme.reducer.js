const initialState = {
  theme: 'light',
};

const theme = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'toggleTheme':
      return { theme: payload };

    default:
      return state;
  }
};

export default theme;
