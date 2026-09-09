import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)

    let increment=()=>{
        setCount(count+1)
    }
    let decreemnt=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increamnet</button>
      <button onClick={decreemnt}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
