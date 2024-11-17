import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img
          src="src/assets/girl.png"
          alt="About me illustration"
          className="about-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            自己紹介追加
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
