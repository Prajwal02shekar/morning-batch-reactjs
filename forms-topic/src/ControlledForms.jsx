import React, { useState } from 'react'

const ControlledForms = () => {

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("")
    let [phNumber,setPhNumber]=useState('')

    let handleUsername = (e) => {
        // console.log(e.target.value)
        setUsername(e.target.value)
    }

    let handleEmail = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    let hanldePhNumber=(e)=>{
        setPhNumber(e.target.value)
    }

    let  handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted")
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(phNumber)
    }
    let handleReset=(e)=>{
        e.preventDefault();
        setUsername("")
        setEmail("")
        setPhNumber("")
        setPassword("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Form</legend>
                <label htmlFor="username">Enter Username:</label>
                <input type="text" onChange={handleUsername} id='username' placeholder='Enter Username' required />
                <br /><br />
                <label htmlFor="email">Enter Email:</label>
                <input type="email" onChange={handleEmail} id='email' placeholder='Enter Email' required />
                <br /><br />
                <label htmlFor="password">Enter Password:</label>
                <input type="password" onChange={handlePassword} id='password' placeholder='Enter Password' required />
                <br /><br />
                <label htmlFor="phNum">Enter Ph Number:</label>
                <input type="tel" onChange={hanldePhNumber} id='phNum' placeholder='Enter Ph Number' required />
                <br /><br />
                <button type='submit'>Submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>



            </fieldset>
        </form>
    )
}

export default ControlledForms
