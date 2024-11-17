import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-title">
      <h1>Portfolio</h1>
    </div>
      <nav className="navbar">
      <a href="#about" className="nav-link">ABOUT</a>
      <a href="#projects" className="nav-link">PROJECTS</a>
      <a href="#contact" className="nav-link">CONTACT</a>
    </nav>
    </header>
  );
};

export default Header;
