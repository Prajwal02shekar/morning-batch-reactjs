// import React, { Component } from 'react'

// export default class ChildComp extends Component {
//   render() {
//     console.log(this)
//     console.log(this.props)
//     console.log(this.props.username1)
//     return (
//       <div>
//         <h1>Child Componant</h1>
//         <h3>My name is {this.props.username1}</h3>
//       </div>
//     )
//   }
// }
//!----------------------------------------------
// import React, { Component } from 'react'
// export default class ChildComp extends Component {
//   render() {
//     // console.log(this.props.details.personName)
//     // console.log(this.props.details.personAge)
//     let {personName,personAge,skills}=this.props.details
//     console.log(personName)
//     console.log(personAge)
//     console.log(skills)
//     return (
//       <div>
//       <h1>Child Componant</h1>
//         <h3>My name is {personName}</h3>
//         <h3>Iam {personAge} years old</h3>
//         <ol>
//             {
//                 skills.map((item)=>{
//                         console.log(item)
//                         return(
//                             <li key={item}>{item}</li>
//                         )
//                 })  
//             }
//         </ol>
//       </div>
//     )
//   }
// }

//!----------------------------------------------
import React, { Component } from 'react'

export default class ChildComp extends Component {
  render() {
    console.log(this.props)

    let {user,age,address}=this.props
    return (
      <div>
       <h1>Child Componant</h1>
            {/* <h2>My name is {this.props.user}</h2>
            <h2>My age is {this.props.age}</h2>
            <h2>My address is {this.props.address}</h2> */}

            <h2>My name is {user}</h2>
            <h2>My age is {age}</h2>
            <h2>My address is {address}</h2>

      </div>
    )
  }
}
