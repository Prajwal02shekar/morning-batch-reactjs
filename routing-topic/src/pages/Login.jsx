import React from 'react'

const Login = () => {
  return (
    <form>
        <fieldset>
            <legend>Login</legend>
            <label htmlFor="username">Enter Username:</label>
            <input type="text" id='username' placeholder='Enter Username' /> <br /><br />
            <label htmlFor="username">Enter Password:</label>
            <input type="password" id='password' placeholder='Enter Password' /> <br /><br />
            <button>Submit</button>
            <button>Reset</button>

        </fieldset>
    </form>
  )
}

export default Login
