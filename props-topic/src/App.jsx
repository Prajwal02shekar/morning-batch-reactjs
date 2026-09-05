// import React, { Component } from 'react'
// import ParentComp from './PropsWithCBC/ParentComp'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>App JSX</h1>
//         {/* <ParentComp/> */}
//       </div>
//     )
//   }
// }


//! Props With FBC

import React from 'react'
import Parent from './FBC/Parent'

const App = () => {
  return (
    <div>
      <h1>App JSX</h1>
      <Parent/>
    </div>
  )
}

export default App
