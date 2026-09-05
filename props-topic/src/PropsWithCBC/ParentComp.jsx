// import React, { Component } from 'react'
// import ChildComp from './ChildComp';

// export default class ParentComp extends Component {

//     render() {
//         let username = "prajwal chandrashekar";

//         return (
//             <div>
//                 <h1>Parent Component</h1>
//                 <h3>My name is {username}</h3>
//                 <hr />
//                 <ChildComp username1={username}/>
//             </div>
//         )
//     }
// }


//!----------------------------------------------

// import React, { Component } from 'react'
// import ChildComp from './ChildComp'

// export default class ParentComp extends Component {
//   render() {
//     let personDetails={
//         personName:"Ajith",
//         personAge:22,
//         skills:["Java","SQL","Python","React JS","Web","JDBC","Hibernate"]
//     }
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <hr />
//         <ChildComp details={personDetails}/>
//       </div>
//     )
//   }
// }

//!----------------------------------------------

import React, { Component } from 'react'
import ChildComp from './ChildComp'
import Child2Comp from './Child2Comp'

export default class ParentComp extends Component {
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <hr />
                <ChildComp user="ajith" age={22} address="Mysore" />
                <hr />
                <Child2Comp user="prajwal" address="Bangalore" />
            </div>
        )
    }
}
