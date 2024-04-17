import React from 'react';
import AboutPage from './pages/MainPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from './pages/ProjectsPage';
import ProductPurchasePage from './pages/ProductPurchasePage';

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
