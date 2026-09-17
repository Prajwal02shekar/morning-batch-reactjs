import React, { useState } from 'react'
import VIDEO from './video.json'
import VideoContainer from './pages/VideoContainer'

console.log(VIDEO)
const App = () => {
    let [state,setState]=useState(VIDEO)

    let [play,setPlay]=useState(state[0])

    let handlePlay=(play)=>{
        setPlay(play)
    }
  return (
    <div>
      <VideoContainer state={state} play={play} handlePlay={handlePlay}/>
    </div>
  )
}

export default App
