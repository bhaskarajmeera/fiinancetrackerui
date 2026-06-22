
import './App.css'
import Button from 'react-bootstrap/Button';
import { Routes,Route } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import Login from './pages/Login';



function App() {
 

  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
    
    </Routes>
    <ToastContainer />
    </>
    
  )
}

export default App
