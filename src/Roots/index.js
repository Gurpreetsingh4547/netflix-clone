import React from 'react';

// PACKAGES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import ScreenLogin from '../Screens/Login';
import ScreenDashBoard from '../Screens/Dashboard';
import Secure from './SecureRoots';

// ROUTE PATH NAME
import { DashBoard, Login, SecureRoots } from './RootsName';

function Index() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Roots path for every component */}
          <Route exact path={SecureRoots} element={<Secure />} />
          <Route exact path={Login} element={<ScreenLogin />} />
          <Route exact path={DashBoard} element={<ScreenDashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Index;
