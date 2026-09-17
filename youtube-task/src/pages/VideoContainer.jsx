import React from 'react'
import Player from './Player'
import PlayerList from './PlayerList'

const VideoContainer = (props) => {
    console.log(props)
    let {state,handlePlay,play}=props
    console.log(handlePlay)
  return (
    <div>
      <section className='Container'>
            <aside className="playerContainer">
                <Player  play={play}/>
            </aside>
            <aside className="playerListContainer">
                {
                    state.map((item)=>{
                        console.log(item);
                        return(
                            <PlayerList item={item} handlePlay={handlePlay} />
                        )
                    })
                }
            </aside>
      </section>
    </div>
  )
}

export default VideoContainer
