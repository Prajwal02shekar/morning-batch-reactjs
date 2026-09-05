// import React from 'react'

// const Child = (props) => {
//     console.log(props)
//     console.log(props.username)
//   return (
//     <div>
//       <h1>Child Component</h1>
//         <h3>My name is {props.username}</h3>
//     </div>
//   )
// }

// export default Child

//!-------------------------------------------------------

// import React from 'react'

// const Child = (props) => {
//     console.log(props)

//     let { stdName, stdAge, stdAddress } = props.student
//     return (
//         <div>
//             <h1>Child Component</h1>
//             {/* <h3>My name is {props.student.stdName}</h3>
//       <h3>My age is {props.student.stdAge}</h3>
//       <h3>My address is {props.student.stdAddress}</h3> */}

//             <h3>My name is {stdName}</h3>
//             <h3>My age is {stdAge}</h3>
//             <h3>My address is {stdAddress}</h3>
//         </div>
//     )
// }

// export default Child


//!-------------------------------------------------------
import React from 'react'

const Child = ({username,address}) => {
    console.log(username)
    console.log(address)
  return (
    <div>
      <h1>Child Component</h1>
      <h2>My name is {username}</h2>
      <h3>Iam from {address}</h3>
    </div>
  )
}

export default Child
