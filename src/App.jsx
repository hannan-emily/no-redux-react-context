import React from 'react'

// import the store for use by this component
import { Store } from './Store'

// import seperate episode component
// using React lazy 
const EpisodesList = React.lazy(() => import('./EpisodesList'))

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

  // ACTION to send the episode object to the store
  const toggleFavAction = episode => {
    const episodeInFavourites = state.favourites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    if (episodeInFavourites) {
      const favouritesWithoutEpisode = state.favourites.filter(
        fav => fav.id !== episode.id
      )
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favouritesWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
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

  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  }

  return (
    <React.Fragment>
      {/* integrating React Suspense */}
      <React.Suspense fallback={<div>Loading...</div>}>

        <header className="header">
          <div>
            <h1>Rick and Morty</h1>
            <p>Pick your favourite episodes</p>
          </div>
          <div>Favourite(s) {state.favourites.length}</div>
        </header>

        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
        
      </React.Suspense>
    </React.Fragment>
  )
}
