import React from 'react';

// Packages
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// COMPONENTS
import App from './App';

// import redux store to provide state to whole app
import store from './store/Store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provideing the store value the app component that is center of our app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
