import React from 'react';

// Packages
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

// COMPONENTS
import App from './App';

// import redux store to provide state to whole app
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provideing the store value the app component that is center of our app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
