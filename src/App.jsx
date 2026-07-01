
import './App.css'
import { Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import DefaultLayout  from './components/layout/DefaultLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transaction from './pages/Transaction.jsx';



function App() {
 
  return (
  
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="transaction" element={<Transaction/>}/>
          </Route>
        </Routes>

        <ToastContainer />
      </div>
    
  )
}

export default App
