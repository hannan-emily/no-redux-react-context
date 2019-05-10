import React from 'react'

// import the store for use by this component
import { Store } from './Store'

export default function App() {
  
  // STEP 3 - THE REDUCER UPDATES THE DATA IN THE STORE
  // this is a React hook
  // "This will give the component access to the data in the value attribute of our context provider."
  const { state, dispatch } = React.useContext(Store)
  

  // STEP 2 - THIS ACTION RUNS A REDUCER
  // action to fetch data from an API 
  const fetchDataAction = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }
  
  // TRIGGER: STEP 1 - THIS STARTS AN ACTION IN MOTION
  // this is a React hook
  // this will run each time the page loads
  // similar to componentDidMount()
  // if onLoad the state.episodes is empty
  // the action fetchDataAction() will run
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  return (
    <React.Fragment>
      {console.log(state)}
      <div className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes</p>
      </div>
        <section className="episode-layout">
          {state.episodes.map(episode => {
            return (
              <section key={episode.id} className="episode-box">
                <img
                  src={episode.image.medium}
                  alt={`Rick and Morty ${episode.name}`}
                />
                <div>{episode.name}</div>
                <section>
                  <div>
                    Season: {episode.season} Number: {episode.number}
                  </div>
                </section>
              </section>
            )
          })}
        </section>
    </React.Fragment>
  )
}
