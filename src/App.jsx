import React from 'react'
import Layout from './pages/Layout'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import WorkPage from './pages/WorkPage'
import SkillsPage from './pages/SkillsPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div className='main-app'>
      <HomePage />
      <WorkPage />  
       <SkillsPage />
       <AboutPage />
    </div>
  )
}

export default App;