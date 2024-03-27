// src/App.tsx

import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default App;
