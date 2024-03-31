import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './sign-up/SignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bridge Royale</h1>
      </header>
      <main>
        <SignUpForm />
      </main>
    </div>
  );
}

export default App;
