import React from 'react';
import Layout from './pages/Layout';
import './App.css';
import useLenis from './components/Lennis';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import SkillsAndContact from './pages/SkillsPage';
import Footer from './components/Footer';

const App = () => {
  // useLenis(); // Uncomment to enable Lenis smooth scrolling

  return (
    <div className='main-app'>
      {/* Navbar can be added here if required */}
      <HomePage />
      <AboutPage />
      <WorkPage />
      <div className='h-full w-full min-h-screen'>
        <SkillsAndContact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
