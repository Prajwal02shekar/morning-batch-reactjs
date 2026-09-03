import React from 'react'

const Task1 = () => {
    let principalAmount=100000;
    let rateOfInterst=5;
    let timeDuration=5;

    let simpleInterst=(principalAmount*rateOfInterst*timeDuration)/100
    console.log(simpleInterst)
  return (
    <div>
      <h1>Simple Interst Calculations</h1>
      <p>principalAmount:₹{principalAmount}/-</p>
      <p>rateOfInterst:{rateOfInterst}%</p>
      <p>timeDuration: {timeDuration}years</p>
      <h2>Simple Interst :₹{simpleInterst}</h2>
    </div>
  )
}

export default Task1
