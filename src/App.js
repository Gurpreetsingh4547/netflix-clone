// import react hooks
import React, { useState } from 'react';

// Css
import './App.css';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import other component
import Login from './components/Login';
import DeshBoard from './components/Dashboard';

// import userAuthentication context
import loginAuth from './components/userAuthentication';

/**
 * Create routes for all components
 * @returns app components return all componets's path
 */
const App = () => {
  // login state for user verfication
  const [userLogin, setUserLogin] = useState(false);

  // username
  const [userName, setUserName] = useState('');
  return (
    <>
      <Router>
        {/* Provide the context value and methods to components */}

        <loginAuth.Provider value={{ userLogin, setUserLogin, userName, setUserName }}>
          <Routes>
            {/* Define all paths */}
            <Route path='/' element={<Login />}></Route>
            <Route path='/dashboard' element={<DeshBoard />}></Route>
          </Routes>
        </loginAuth.Provider>
      </Router>
    </>
  );
};

export default App;
