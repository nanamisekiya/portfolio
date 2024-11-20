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
      <a href="#account" className="nav-link">ACCOUNT</a>
    </nav>
    </header>
  );
};

export default Header;
