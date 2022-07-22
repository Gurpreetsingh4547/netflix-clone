import React, { useContext } from 'react';

// PACKAGES
import { Navigate } from 'react-router-dom';

// Routes
import { DashBoard, Login } from '../RootsName';

// Context
import LoginAuth from '../../Context/userAuthentication';

function Index() {
  const UserVerifify = useContext(LoginAuth);

  // destructure userVerifity
  const { userLogin } = UserVerifify;

  // if logged in is true user navtigate to Dashboard
  if (userLogin) {
    return <Navigate to={DashBoard} />;
  }

  // If user not logged in user always remians on login
  return <Navigate to={Login} />;
}

export default Index;
