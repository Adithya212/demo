import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
function App() {
  const movieNumber=1;

  return (
   <>
    {movieNumber ===1 ? (<MovieCard movie={{title:"My Film",release_date:"2020"}}/>)
    :(<MovieCard movie={{title:"My Film",release_date:"2024"}}/>)}
    </>
  )
}
function Text({display}){
  return (
    <div>
      <p>Hello from Text() " {display} "</p>
    </div>
  )
}

export default App
