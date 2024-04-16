import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import PersuasivePage from './pages/PersuasivePage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import InputForm from './pages/InputForm';
import CreateDesign from './pages/CreateDesign';
import DownloadCadConversion from './pages/DownloadCadConversion';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateDesign />} />
        <Route path="/download-cad-conversion" element={<DownloadCadConversion />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/persuasive" element={<PersuasivePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/create" element={<CreateDesign />} />
        <Route path="/create/custom" element={<InputForm />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;