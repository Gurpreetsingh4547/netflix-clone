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
  if (userLogin) {
    return <Navigate to={DashBoard} />;
  }
  return <Navigate to={Login} />;
}

export default Index;
