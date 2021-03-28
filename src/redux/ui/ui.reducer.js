const initialState = {
  showProfileOptionPopup: false,
  showThemeOptionPopup: false,
  isLoading: false,
};

const ui = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'hideProfileOptionPopup':
      return { ...state, showProfileOptionPopup: false };
    case 'toggleProfileOptionPopup':
      return { ...state, showProfileOptionPopup: !state.showProfileOptionPopup };
    case 'hideThemeOptionPopup':
      return { ...state, showThemeOptionPopup: false };
    case 'toggleThemeOptionPopup':
      return { ...state, showThemeOptionPopup: !state.showThemeOptionPopup };
    case 'setLoadingStateTrue':
      return { ...state, isLoading: true };
    case 'setLoadingStateFalse':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default ui;
