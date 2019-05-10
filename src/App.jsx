import React from 'react'

// import the store for use by this component
import { Store } from './Store'

export default function App() {
  // this is a React hook
  // "This will give the component access to the data in the value attribute of our context provider."
  const store = React.useContext(Store)
  
  return (
    <React.Fragment>
      {console.log(store)}
      <div>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
    </React.Fragment>
  )
}
