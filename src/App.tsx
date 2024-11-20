import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Account from './components/Account';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Account />
      </main>
      <Footer />
    </div>
  );
};

export default App;
