import React, { useMemo, useState } from 'react';

// USER AUTHENTICATION
import LoginAuth from './Context/userAuthentication';

// ROUTES
import Roots from './Roots';
/**
 * Create routes for all components
 * @returns app components return all componets's path
 */
function App() {
  // create state for set user login true or false on user logout using context
  const [userLogin, setUserLogin] = useState(false);

  // Create state for set username on login and store username in context
  const [userName, setUserName] = useState('');

  // use memo hook for prevent to re-run my context wheneven its re-render
  const AuthenticateUser = useMemo(() => ({
    userLogin, setUserLogin, userName, setUserName,
  }));

  return (
    <div>
      <LoginAuth.Provider value={AuthenticateUser}>
        {/* Roots */}
        <Roots />
      </LoginAuth.Provider>
    </div>
  );
}

export default App;
