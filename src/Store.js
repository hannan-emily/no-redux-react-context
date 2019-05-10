// Store.js is the replacement for the Redux Store (typically called `<name>.module.js`)

import React from 'react'

export const Store = React.createContext();

// Similar to Redux State, we store the default values here
const initialState = {}

function reducer() {}

// export component
export function StoreProvider(props) {
  // the state (store) is made available to components
  // by exporting it as an object through value=()
  // and wrapping all components with the Provider
  return <Store.Provider value='data from store'> {props.children}
  </Store.Provider>
}