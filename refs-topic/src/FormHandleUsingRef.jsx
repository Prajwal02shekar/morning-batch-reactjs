import React, { useRef } from 'react'

const FormHandleUsingRef = () => {
    let usernameRef=useRef()
    let passwordRef=useRef()
    let emailRef=useRef()

    let handleSubmit=(e)=>{
        e.preventDefault()

        console.log(usernameRef.current.value)
        console.log(passwordRef.current.value)
        console.log(emailRef.current.value)


    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Form</legend>
                <label htmlFor="username">Username:</label>
                <input type="text" ref={usernameRef} id='username' placeholder='Enter Username' />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" ref={passwordRef} id='password' placeholder='Enter Password' />

                <br /><br />
                <label htmlFor="email">Enter Email:</label>
                <input type="email" ref={emailRef} placeholder='Enter Email' id='email' />
                <br /><br />
                <button>Submit</button>
                <button>Reset</button>
            </fieldset>
        </form>
    )
}

export default FormHandleUsingRef
