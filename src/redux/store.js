import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

// For when not using Chrome redux dev tool extension.
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Persistor is the persistent version of our store.
export const persistor = persistStore(store);
