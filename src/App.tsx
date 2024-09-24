import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Number from './Components/Login/Number'; 
import Dashboard from './Components/Dashboard/Dashboard'; 
import Usertemplate from './Components/Dashboard/Usertemplate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Number />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-template" element={<Usertemplate/>}/>
        </Routes>

       
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
