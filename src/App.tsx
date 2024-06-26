import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/sign-up/SignUpForm';
import LandingPage from './components/base/LandPage';
import Navbar from './components/base/Navbar';
import Login from './components/sign-up/Login'
import Profile from './components/profile/profile';
import TableTopGame from './components/game-platform/table-top';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/play" element={<TableTopGame />} />
      </Routes>
    </Router>     
);
}

export default App;
