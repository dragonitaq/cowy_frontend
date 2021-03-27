import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import theme from './theme/theme.reducer';
import user from './user/user.reducer';
import ui from './ui/ui.reducer';

// Configure how the store should persist on local storage.
const persistConfig = {
  // This tells which reducer we want to use. We want the root reducer.
  key: 'root',
  // This tells which storage to use. We use the local storage that we import earlier.
  storage,
};

const rootReducer = combineReducers({
  theme,
  user,
  ui,
});

// Then we pass in our config & root reducer to this fn to have it persisted in local storage. This return a persisted version of our root reducer.
export default persistReducer(persistConfig, rootReducer);
