import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// <Provider store={store}>
// {/* BrowserRouter is a component that provide routing functionality.*/}
// <BrowserRouter>
//   {/* PersistGate will receive Redux store and also 'rehydrate'(refill) the state whenever app refresh/reopen. */}
//   <PersistGate persistor={persistor}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </PersistGate>
// </BrowserRouter>
// </Provider>,