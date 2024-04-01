import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './sign-up/SignUpForm';
import LandingPage from './base/LandPage';
import Navbar from './base/Navbar';
import Login from './sign-up/Login'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>     
);
}

export default App;
