import React, { StrictMode } from "react";
import store from './lib'
import './styles/globals.scss'
import { Provider } from 'react-redux'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-loading-skeleton/dist/skeleton.css'

import AppRouter from "./Routes/Routes/App";
const App = () => {
  window.addEventListener('offline', () => toast.error("You Are Offline Now"));
  window.addEventListener('online', () => toast.success("You Are Online Now"));
  return (
    <Provider store={store}>
      <StrictMode>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div id="development">{`You may find some mistakes because it's still under development`}</div>
        <AppRouter />
      </StrictMode>
    </Provider>
  )
}

export default App;
