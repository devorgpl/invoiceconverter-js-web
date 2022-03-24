import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import './App.css';
import LoginButton from './components/login-button/LoginButton';

function App(): React.ReactElement {
  return (
    <div className="App">
      <div className='TopBar'>
        <LoginButton />
      </div>
      <div className="MainContent">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
