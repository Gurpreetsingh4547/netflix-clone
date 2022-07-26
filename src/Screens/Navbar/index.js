import React, { useContext } from 'react';

// import context from authentication
import { Link, Navigate } from 'react-router-dom';
import LoginAuth from '../../Context/userAuthentication';

// import custon hook for changing name
import useChangeName from '../../customHook/useChangeUserName';

// ROUTES
import { SecureRoots } from '../../Roots/RootsName';

function Navbar() {
  const [handleUserName] = useChangeName('john');

  // assgin the value of context from loginAuthenication context
  const userVerifiy = useContext(LoginAuth);

  // destructuring the userVerifiy
  const { userLogin, setUserLogin, userName } = userVerifiy;

  // user logout and setUserlogin false
  function handleLogout() {
    setUserLogin(!userLogin);
  }

  // Custom hook to change username
  const handleUsername = () => {
    handleUserName();
  };

  // if user
  if (userLogin === false) {
    return <Navigate to={SecureRoots} />;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Left links  */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-danger fs-1" to="/">Netflix</Link>
            </li>
          </ul>
          {/* Left links  */}

        </div>

        <div className="d-flex align-items-center">

          {/* display userName */}
          <p className="my-2 ">{userName}</p>

          <div className="dropdown mx-5">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

              {/* Logout Button */}
              <li>
                <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
              </li>

              {/* change username with custom hook */}
              <li>
                <button type="button" className="btn btn-primary my-3" onClick={handleUsername}>Change Username</button>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </nav>

  );
}

export default Navbar;
