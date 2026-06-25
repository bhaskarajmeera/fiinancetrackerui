
import './App.css'
import { Routes,Route } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import { DefaultLayout } from './components/layout/DefaultLayout.jsx';



function App() {
 
  return (
    <div className="wrapper">
        <Routes>
        <Route path="/" element={<DefaultLayout/>}>  
        <Route index element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        </Route>

        </Routes>
        <ToastContainer />
        
    </div>
  )
}

export default App
