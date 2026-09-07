// import React, { Component } from 'react'

// export default class Example1 extends Component {
//     constructor(){
//         super();
//         this.state={
//             username:"Ajith",
//             age:22,
//             address:"Mysore"
//         }
//     }

//      handleDetails=()=>{
//         this.setState({
//             username:"Prajwal",
//             age:25,
//             address:"Bangalore"
//         })
//      }
//   render() {
//     return (
//       <div>
//         <h1>Iam a Class based component</h1>

//         <h3>My name is {this.state.username}</h3>
//         <h3>Iam {this.state.age} years old</h3>
//         <h3>Iam from {this.state.address}</h3>
//         <button onClick={this.handleDetails}>Change Details</button>
//       </div>
//     )
//   }
// }

//!-----------------------------------------------------
import React, { Component } from 'react'

export default class Example1 extends Component {
    constructor() {
        super()
        this.state = {
            student1: {
                std1Name: "Ajith",
                std1Age: 22,
                skills: ["Java", "Python", "React JS", "SQL"]
            },
            student2: {
                std2Name: "Suhas",
                std2Age: 23,
                std2Address: "Mysore"
            }
        }
    }
    handleStd1 = () => {
        this.setState({
            student1: {
                std1Name: "Prajwa",
                std1Age: 25,
                skills: ["Java", "Python", "React JS", "SQL","MERN"]
            },
        })
    }
    handleStd2 = () => {
        this.setState({
            student2: {
                std2Name: "Pavan",
                std2Age: 24,
                std2Address: "Haveri"
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Iam a Class based component</h1>
                <h2>Studnet 1 Details</h2>
                <h4>My name is {this.state.student1.std1Name}</h4>
                <h4>Iam {this.state.student1.std1Age} years old</h4>
                <ol>
                    {
                        this.state.student1.skills.map((item) => {
                            console.log(item)
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ol>
                <button onClick={this.handleStd1}>Change Student 1 Details</button>
                <hr />
                <h2>Studnet 2 Details</h2>
                <h4>My name is {this.state.student2.std2Name}</h4>
                <h4>Iam {this.state.student2.std2Age} years old</h4>
                <h4>Iam from {this.state.student2.std2Address}</h4>
                <button onClick={this.handleStd2}>Change Student 2 Details</button>


            </div>
        )
    }
}



//!--------------------------------------------------------------------
//? Updating State With CBC

// import React, { Component } from 'react'

// export default class Example1 extends Component {


//     constructor() {
//         super();
//         this.state = {
//             myFavPlace: "Mysore"
//         }
//     }
//     handlePlace = () => {
//         this.setState({
//             myFavPlace: "Bangalore"
//         })
//     }
//     render() {


//         return (
//             <div>
//                 <h2>My fav place is {this.state.myFavPlace}</h2>
//                 <button onClick={this.handlePlace}>Change Place</button>
//             </div>
//         )
//     }
// }



