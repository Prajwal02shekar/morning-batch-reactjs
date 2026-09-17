// import React from 'react'
// import ComponentF from './ComponentF'

// const ComponentE = (props) => {
//     console.log(props)
//   return (
//     <div>
//       <h1>Iam a component E</h1>
//       <ComponentF username={props.username}/>
//     </div>
//   )
// }

// export default ComponentE



import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import UserDetailsContext from './userContext'


const ComponentE = () => {
    let userDetails=useContext(UserDetailsContext)
    console.log(userDetails)
  return (
    <div>
      <h1>Iam a component E</h1>
      <h3>My name is {userDetails.userName}</h3>
            <h3>My age is {userDetails.age}</h3>
            <h3>Iam from  {userDetails.address}</h3>
      <ComponentF/>
    </div>
  )
}

export default ComponentE
