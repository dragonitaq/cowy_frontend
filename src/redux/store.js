import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';

const middlewares = [];

export let store;

if (process.env.NODE_ENV === 'production') {
  // For when not using Chrome redux dev tool extension.
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

// Persistor is the persistent version of our store.
export const persistor = persistStore(store);
