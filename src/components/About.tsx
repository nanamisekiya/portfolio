import React from 'react';
import './About.css';

const About: React.FC = () => {
  const base = process.env.GITHUB_PAGES ? '/portfolio' : './';

  return (
    <section id="about">
      <div className="about-container">
        <img
          src={`${base}/girl.png`}
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
