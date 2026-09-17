import React from 'react'

const Player = (props) => {
console.log(props)
    return (
    <div>
      <video src={props.play.videoUrl} controls height={500} autoPlay width={700}></video>
    </div>
  )
}

export default Player
