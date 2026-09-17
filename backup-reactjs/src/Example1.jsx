import React, { useState } from 'react'

const Example1 = () => {
    let [myName,setMyname]=useState("Ajith")
    let [age,setAge]=useState(23)
    let [skills,setSkills]=useState(["Java","SQL","Web","React JS"])

    let handleData=()=>{
        setMyname("Pavan")
        setAge(24)
        setSkills(["Java","Python","MERN","MEAN"])
    }
  return (
    <div>
      <h1>My name is {myName}</h1>
      <h2>Iam {age} years old</h2>
      <ol>
        {
            skills.map((item)=>{
                console.log(item)
                return(
                    <li key={item}>{item}</li>
                )
            })
        }
      </ol>
      <button onClick={handleData}>Change Details</button>
    </div>
  )
}

export default Example1
