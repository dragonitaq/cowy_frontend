import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';

const rootReducer = combineReducers({
  theme: theme,
});

export default rootReducer;
