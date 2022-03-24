import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './components/top-bar/TopBar';
import ConvertPage from './pages/convert/Convert';
import MainPage from './pages/main/Main';

function App(): React.ReactElement {
  return (
    <div className="App">
      <div className="TopBar">
        <TopBar />
      </div>
      <div className="MainContent">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/convert" element={<ConvertPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
