// import React and react-redux
import React, { useContext, useState } from 'react'

// packges
import { Navigate } from 'react-router-dom'

// import context for Authentication
import loginAuth from './userAuthentication'

/**
 * Login Page - verifty user with email and password
 * @returns user login true in context and user name
 */
const Login = () => {
  // use context from loginAuthenication context
  const userVerifiy = useContext(loginAuth)

  // creating the user-email and user-password state for getting input values
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  // destructuring the userVerifiy
  const { userLogin, setUserLogin, setUserName } = userVerifiy

  // setting state of user email and password from inputs
  function handleUserEmail (e) {
    setUserEmail(e.target.value)
  }

  function handleUserPassword (e) {
    setUserPassword(e.target.value)
  }

  // verify the user with email and password
  function handleLogin () {
    // used static username and password
    if (userEmail === 'admin@gmail.com' && userPassword === 'admin') { // verify the user name and password the user have enter
      // Set userlogged in true
      setUserLogin(!userLogin)

      // Set username
      setUserName('admin')
    } else { // if user enter incorrect password or username
      alert('Username or Passwrod is Incorrect')
    }
  }

  // after logged in userLogin is true and nevigate user to userLogin
  if (userLogin) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className='container my-5 w-25'>
      <h1 className='text-center'>Login</h1>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email"
            id="form2Example1"
            className="form-control"
            onChange={handleUserEmail}
          />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        {/*  Password input  */}
        <div className="form-outline mb-4">
          <input type="password"
            id="form2Example2"
            className="form-control"
            onChange={handleUserPassword}
          />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        {/* Login button */}
        <button type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >Log in</button>
      </form>
    </div>
  )
}

export default Login
