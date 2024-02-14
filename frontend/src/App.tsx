import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage'; 
import AboutPage from './AboutPage'; 
import PersuasivePage from './PersuasivePage'; 
import ContactPage from './ContactPage'; 
import ReviewsPage from './ReviewsPage'; 
import FileUploader from './FileUploader';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <h1 className='text-4xl mb-4'>Tubender Bare Bones</h1>
        <FileUploader />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/persuasive" element={<PersuasivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/" element={<div>Welcome to the main page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
