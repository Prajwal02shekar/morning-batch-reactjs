// import React, { useState } from 'react'

// const ExampleFBC = () => {
//     let [username, setUsername] = useState("pavan")
//     let [age, setAge] = useState(23)
//     let [address, setAddress] = useState("Mysore")


//     // let handleUsername=()=>{
//     //     setUsername("Ajith")
//     // }
//     // let handleAge=()=>{
//     //     setAge(25)
//     // }

//     let handleData=()=>{
//         setUsername("Prajwal")
//         setAge(25)
//         setAddress("BAnaglore")
//     }
//     return (
//         <div>
//             <h1>My name is {username}</h1>
//             <h2>Iam {age} years old</h2>
//             <h2>Iam from {address}</h2>

//             {/* <button onClick={handleUsername}>Change Username</button>
//             <button onClick={handleAge}>Change Age</button>
//             <button>Change Address</button> */}


//             <button onClick={handleData}>Change Details</button>
//         </div>
//     )
// }

// export default ExampleFBC



//!---------------------------------------
import React, { useState } from 'react'

const ExampleFBC = () => {
    let [userDetails, setUserDetails] = useState({
        username: "Ajith",
        age: 23,
        address: "Mysore",
        phNum: 9874563210,
        skills: ["REact JS", "Java", "Python"]
    })
    let handleDetails = () => {
        setUserDetails({
            username: "Pavan",
            age: 21,
            address: "Banaglore",
            phNum: 9874563211,
            skills: ["REact JS", "Java", "Python",'MERN']
        })
    }
    return (
        <div>
            <h2>My name is {userDetails.username}</h2>
            <h2>Iam {userDetails.age} years old</h2>
            <h3>Iam from {userDetails.address}</h3>
            <h3>My number is {userDetails.phNum}</h3>
            <ul>
                {
                    userDetails.skills.map((item) => {
                        console.log(item)
                        return (
                            <li key={item}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={handleDetails}>Change Data</button>
        </div>
    )
}

export default ExampleFBC

//!--------------------------------------

