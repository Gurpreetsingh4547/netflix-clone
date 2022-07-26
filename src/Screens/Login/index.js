import React, { useContext, useState } from 'react';

// PACKAGES
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// import context for Authentication
import loginAuth from '../../Context/userAuthentication';

// Route
import { SecureRoots } from '../../Roots/RootsName';

/**
 * Login Page - verifty user with email and password
 * @returns user login true in context and user name
 */
function Login() {
  // use context from loginAuthenication context
  const userVerifiy = useContext(loginAuth);

  // creating the user-email and user-password state for getting input values
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // destructuring the userVerifiy
  const { userLogin, setUserLogin, setUserName } = userVerifiy;

  /**
   * Set user Email in state onChange Event at Email input box
   * @param {object} event
   */
  function handleUserEmail(event) {
    setUserEmail(event.target.value);
  }
  /**
   * Set password in state onChange Event at password Input box
   * @param {object} event
   */
  function handleUserPassword(event) {
    setUserPassword(event.target.value);
  }

  /**
   * verify the user with email and password
   * @returns
   */
  function handleLogin() {
    // used static username and password
    if (userEmail === 'admin@gmail.com' && userPassword === 'admin') { // verify the user name and password the user have enter
      // Set userlogged in true
      setUserLogin(!userLogin);

      // Set username
      setUserName('admin');

      return;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }

  /**
   * prevent refresh page on the submittion of form
   * @param {object} event
   */
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (userLogin) {
    return <Navigate to={SecureRoots} />;
  }

  return (
    <div className="container my-5 w-25">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            onChange={handleUserEmail}
          />
          <label
            className="form-label"
            htmlFor="form2Example1"
          >
            Email address
          </label>
        </div>

        {/*  Password input  */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            onChange={handleUserPassword}
          />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        {/* Login button */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
