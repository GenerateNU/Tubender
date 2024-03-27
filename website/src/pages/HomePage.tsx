// src/components/HomePage.tsx

import React from 'react';
import './HomePage.css'; // Make sure you have this line to import the CSS styles
import backgroundImage from '../images/background.png'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay-text">we are portable</div>
    </div>
  );
};

export default HomePage;
