// import React from 'react'

// const ComponentF = (props) => {
//     console.log(props)
//   return (
//     <div>
//       <h1>Iam a Component F</h1>
//       <h3>My name is {props.username}</h3>

//     </div>
//   )
// }

// export default ComponentF


import React, { useContext } from 'react'
import UserContext from './userContext'
import UserDetailsContext from './userContext'

const ComponentF = () => {
    let details = useContext(UserDetailsContext)

    console.log(details)
    return (
        <div>
            <h1>Iam a component F</h1>
            <h3>My name is {details.userName}</h3>
            <h3>My age is {details.age}</h3>
            <h3>Iam from  {details.address}</h3>
        </div>
    )
}

export default ComponentF
