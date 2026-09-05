// import React from 'react'
// import Child from './Child';

// const Parent = () => {

//     let username="Ajith";
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <h3>My name is {username}</h3>
//       <hr />
//       <Child username={username}/>
//     </div>
//   )
// }

// export default Parent

//!-------------------------------------------------------
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//     let student={
//         stdName:"Ajith",
//         stdAge:23,
//         stdAddress:"Mysore"
//     }
//   return (
//     <div>
//       <h1>Parent Component</h1>4
//       <hr />
//       <Child student={student}/>
//     </div>
//   )
// }

// export default Parent

//!-------------------------------------------------
import React from 'react'
import Child from './Child'
import Child2 from './Child2'

const Parent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <hr />
            <Child username="prajwal" address="Bangalore"/>
            <hr />
            <Child2 username="Sakshi" address="Mysore"/>
        </div>
    )
}

export default Parent
