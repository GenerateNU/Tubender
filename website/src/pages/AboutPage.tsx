// src/components/AboutPage.tsx

import React from 'react';
import './AboutPage.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <section className="content-section">
        <div className="text-content">
          <h2>software - gcode</h2>
          <p>Figma ipsum component variant main layer. Slice object variant share text project. Device mask object move star hand star frame. Strikethrough prototype outline underline figjam strikethrough italic invite. Pen rectangle boolean invite distribute.</p>
        </div>
        <div className="image-content" style={{ backgroundImage: `url(${image1})` }}>
        </div>
      </section>
      <section className="content-section2">
        <div className="image-container">
          <img src={image2} alt="seamless integration" className="overflow-image"/>
        </div>
        <div className="text-content2">
          <h2>seamless integration</h2>
          <p>Figma ipsum component variant main layer. Slice object variant share text project. Device mask object move star hand star frame. Strikethrough prototype outline underline figjam strikethrough italic invite. Pen rectangle boolean invite distribute.</p>
        </div>
      </section>
      <section className="content-section2">
      <div className="text-content3">
          <h2>automatic tube bending</h2>
          <p>Figma ipsum component variant main layer. Slice object variant share text project. Device mask object move star hand star frame. Strikethrough prototype outline underline figjam strikethrough italic invite. Pen rectangle boolean invite distribute.</p>
        </div>
        <div className="image-container2">
          <img src={image2} alt="automatic tube bending" className="overflow-image"/>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
