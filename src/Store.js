// Store.js is the replacement for the Redux Store (typically called `<name>.module.js`)

import React from 'react'

export const Store = React.createContext();

// Similar to Redux State, we store the default values here
// these are the INITIAL values 
const initialState = {
  episodes: [],
  favourites: []
};

// this reducers 
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

// export component
export function StoreProvider(props) {
  // the state (store) is made available to components
  // by exporting it as an object through value=()
  // and wrapping all components with the Provider

  // this is a React Hook
  // import state for use by reducer
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // We then turn our new state and dispatch variables into an object
  // export those values together
  const value = { state, dispatch };

  // pass all values down to any child components
  return <Store.Provider value={value}> {props.children}
  </Store.Provider>
}