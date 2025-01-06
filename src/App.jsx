import React from 'react'
import Layout from './pages/Layout'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import WorkPage from './pages/WorkPage'

const App = () => {
  return (
    <div className='main-app'>
      <HomePage />
      <WorkPage />    
    </div>
  )
}

export default App;