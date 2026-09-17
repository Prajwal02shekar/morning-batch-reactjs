import React from 'react'

const PlayerList = (props) => {
    console.log(props)
    let {item,handlePlay}=props
    console.log(item)
    let {title,thumbnailUrl,duration,views}=item
  return (
   <aside className="cardsContainer" onClick={()=>{handlePlay(item)}}>
    <img src={thumbnailUrl} alt="" />
    <h4>{title}</h4>
    <h5>Duration: {duration}</h5>
    <h5>View: {views}</h5>
   </aside>
  )
}

export default PlayerList
