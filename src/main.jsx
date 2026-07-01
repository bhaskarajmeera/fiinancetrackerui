import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import {  BrowserRouter } from "react-router-dom";
import { createContext } from 'react';

export const UserContext = createContext()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext.Provider>
  </StrictMode>,
)
