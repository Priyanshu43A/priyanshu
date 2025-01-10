import React from 'react'
import Layout from './pages/Layout'
import './App.css'
import useLenis from './components/Lennis'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import SkillsAndContact from './pages/SkillsPage'
import Footer from './components/Footer'

const App = () => {
  useLenis();
  return (
    <div className='main-app'>
      <HomePage />
       <AboutPage />
      <WorkPage />  
       <SkillsAndContact />
       <Footer />
    </div>
  )
}

export default App;