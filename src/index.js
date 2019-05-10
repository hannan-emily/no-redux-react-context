import React from 'react';
import ReactDOM from 'react-dom';
// how we connect the store to all other components
import { StoreProvider } from './Store';

import App from './App';


ReactDOM.render(
  // we wrap the entire app with the store, 
  // allowing access to the data
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
