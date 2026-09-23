// import React, { useState } from 'react'

// const Example1 = () => {
//     let [myName,setMyname]=useState("Ajith")
//     let [age,setAge]=useState(23)
//     let [skills,setSkills]=useState(["Java","SQL","Web","React JS"])

//     let handleData=()=>{
//         setMyname("Pavan")
//         setAge(24)
//         setSkills(["Java","Python","MERN","MEAN"])
//     }
//   return (
//     <div>
//       <h1>My name is {myName}</h1>
//       <h2>Iam {age} years old</h2>
//       <ol>
//         {
//             skills.map((item)=>{
//                 console.log(item)
//                 return(
//                     <li key={item}>{item}</li>
//                 )
//             })
//         }
//       </ol>
//       <button onClick={handleData}>Change Details</button>
//     </div>
//   )
// }

// export default Example1


// import React, { useRef } from 'react'

// const Example1 = () => {
//   let h1Ref = useRef();
//   console.log(h1Ref.current)
//   let targetData=()=>{
//     console.log(h1Ref)
//     h1Ref.current.style.backgroundColor="red"
//     h1Ref.current.style.color="white"

//   }
//   return (
//     <div>
//       <h1 ref={h1Ref}>Refs Topic </h1>
//       <button onClick={targetData}>Target Data</button>
//     </div>
//   )
// }

// export default Example1


import React, { useRef, useState } from 'react'

const Example1 = () => {
  let [state, setState] = useState(false)
  let imageRef = useRef()
  let handleImage = () => {
    if (!state) {
      imageRef.current.style.borderRadius = "50%"
    } else {
      imageRef.current.style.borderRadius = "0"
    }
    setState(!state)
  }
  return (
    <div>
      <img height={250} onMouseOver={handleImage} onMouseOut={handleImage} ref={imageRef} width={250} src="https://avatars.githubusercontent.com/u/160094074?v=4" alt="" />
    </div>
  )
}

export default Example1
