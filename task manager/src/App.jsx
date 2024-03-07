import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Aside from './components/Aside';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="aside">
        <Aside />
      </div>
      <div className="main-content">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
