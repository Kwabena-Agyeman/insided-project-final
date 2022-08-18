import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position='bottom-left'
      autoClose={10000}
      hideProgressBar={false}
      theme='dark'
      pauseOnHover
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
