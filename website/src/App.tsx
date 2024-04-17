// src/App.tsx

import React from 'react';
import AboutPage from './components/AboutPage';
import logo from './logo.svg';
import './App.css';
import ProductPurchasePage from './ProductPurchasePage';

const App: React.FC = () => {
  return (
    <div className=" h-full w-full">
      <AboutPage />
    <div className="App">
    <div>
      <ProductPurchasePage />
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
