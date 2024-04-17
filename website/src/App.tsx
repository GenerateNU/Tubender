import React from 'react';
import AboutPage from './components/AboutPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPurchasePage from './components/ProductPurchasePage';
import ProjectsPage from './components/ProjectsPage';

const App: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/product-purchase" element={<ProductPurchasePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
