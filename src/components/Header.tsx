import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>私のポートフォリオ</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
