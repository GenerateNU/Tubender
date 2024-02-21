import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import RoutingComponent from './components/RoutingComponent';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import PersuasivePage from './pages/PersuasivePage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';

function App() {
  return (
  <RoutingComponent>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/persuasive" element={<PersuasivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
   </RoutingComponent>
  );
}

export default App;