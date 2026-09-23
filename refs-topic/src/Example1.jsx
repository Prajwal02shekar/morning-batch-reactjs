// import React, { useRef } from 'react'

// const Example1 = () => {

//     let h1Ref=useRef();
//     console.log(h1Ref)

//     let targetData=()=>{
//         h1Ref.current.innerText="Prajwal"
//         h1Ref.current.style.backgroundColor="red"
//     }
//   return (
//     <div>
//       <h1 ref={h1Ref}>REF's Topic</h1>
//       <button onClick={targetData}>Taraget Data</button>
//     </div>
//   )
// }

// export default Example1



// import React, { useRef, useState } from 'react'

// const Example1 = () => {
//     let [state,setState]=useState(false);
//     let imageRef=useRef();

//     let handleImage=()=>{
//         if(!state){
//             imageRef.current.style.borderRadius="50%"
//         }else{
//             imageRef.current.style.borderRadius="0"
//         }
//         setState(!state)
//     }
//   return (
//     <div>
//       <img height={200} onMouseOver={handleImage}  onMouseOut={handleImage} ref={imageRef} width={200} src="https://avatars.githubusercontent.com/u/160094074?v=4" alt="" />
//     </div>
//   )
// }

// export default Example1


import React, { useRef, useState } from 'react'
import v1 from './AKKA PAKKA .mp4'

const Example1 = () => {
    let [state,setState]=useState(false)
    let videoRef=useRef();

    let handleVideo=()=>{
        if(!state){
            videoRef.current.play()
        }
        else{
            videoRef.current.pause()

        }
        setState(!state)
    }
  return (
    <div>
      <video src={v1} onClick={handleVideo} ref={videoRef} height={550} controls width={550}></video>
    </div>
  )
}

export default Example1
