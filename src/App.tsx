import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './sign-up/SignUpForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bridge Royale</h1>
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/sign-up" element={<SignUpForm />} />
          </Routes>
        </Router>     
      </main>
    </div>
  );
}

export default App;
