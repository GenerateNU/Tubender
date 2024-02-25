import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import PersuasivePage from './pages/PersuasivePage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import InputForm from './pages/InputForm';
import CreateDesign from './pages/CreateDesign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateDesign />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/persuasive" element={<PersuasivePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/create" element={<CreateDesign />} />
        <Route path="/create/custom" element={<InputForm />} />
      </Routes>
    </Router>

  );
}

export default App;
