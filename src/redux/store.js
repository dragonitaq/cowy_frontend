import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

// For when not using Chrome redux dev tool extension.
// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// import { persistStore } from 'redux-persist';

/* Persistor is the persistent version of our store. */
// export const persistor = persistStore(store);

/* We export persistedStore just in case we are going to use it in future. */
// const persistedStore = { store, persistor };
