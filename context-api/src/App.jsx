// import React from 'react'
// import ComponentC from './Example1/ComponentC'

// const App = () => {
//     let username="Pavan";
//   return (
//     <div>
//       <h2>App JSX</h2>
//       <h3>My name is {username}</h3>
//       <ComponentC username={username}/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import ComponentC from './Example1/ComponentC'
import UserContext from './Example1/userContext'
import UserDetailsContext from './Example1/userContext'

const App = () => {
    let userDetails = {
        userName: "Ajith",
        age: 23,
        address: "Mysore"
    }
    return (
        <div>
            <h1>App JSX</h1>
            <h3>My name is {userDetails.userName}</h3>
            <h3>My age is {userDetails.age}</h3>
            <h3>Iam from  {userDetails.address}</h3>

            <UserDetailsContext.Provider value={userDetails}>
                <ComponentC />
            </UserDetailsContext.Provider>

        </div>
    )
}

export default App
