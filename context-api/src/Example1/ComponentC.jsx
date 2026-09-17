// import React from 'react'
// import ComponentE from './ComponentE'

// const ComponentC = (props) => {
//     console.log(props)
//   return (
//     <div>
//       <h1>Iam a Component C</h1>
//       <ComponentE username={props.username}/>
//     </div>
//   )
// }

// export default ComponentC




import React from 'react'
import ComponentE from './ComponentE'

const ComponentC = () => {
  return (
    <div>
      <h1>Iam a component C</h1>
      <ComponentE/>
    </div>
  )
}

export default ComponentC
