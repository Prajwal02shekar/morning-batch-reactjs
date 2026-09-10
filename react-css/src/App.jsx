// import React from 'react'

// const App = () => {
//   return (
//     <div style={{height:"50px",width:"100%",backgroundColor:"red"}}>
//       <h1 style={{color:"white",textAlign:"center",fontFamily:"monospace"}}>Top Level Component</h1>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './Navbar'
import Navbar1 from './Navbar1'
import ProfileCard from './ProfileCard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ProfileCard/>
      {/* <Navbar1/> */}
    </div>
  )
}

export default App
