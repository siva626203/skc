import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import registerReducer  from './features/register';
import './css/form.css'
const store=configureStore({
  reducer: {
    user: userReducer,
    register:registerReducer,
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>
);
