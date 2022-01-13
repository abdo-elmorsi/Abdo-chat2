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
        <div id="development">
          <span onClick={(e) => document.querySelector('#development').remove()}>
            <svg width={13} style={{ right: '10px', top: "3px", cursor: 'pointer' }} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-times fa-w-11 fa-2x position-absolute"><g className="fa-group"><path fill="currentColor" d="M9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,109.28,256ZM342.79,111.45,320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48Z" className="fa-secondary"></path><path fill="currentColor" d="M342.79,356.07a31.46,31.46,0,0,1,0,44.48l-22.24,22.24a31.46,31.46,0,0,1-44.48,0L9.21,155.93a31.46,31.46,0,0,1,0-44.48L31.45,89.21a31.46,31.46,0,0,1,44.48,0Z" className="fa-primary"></path></g></svg>
          </span>
          <p className="m-0 py-2">You may find some mistakes because it's still under development...</p>
        </div>
        <AppRouter />
      </StrictMode>
    </Provider>
  )
}

export default App;
