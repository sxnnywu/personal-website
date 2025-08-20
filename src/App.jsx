// IMPORTS
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx'; 
import Experience from './sections/Experience.jsx';

// COMPONENT
function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <Experience />
      </div>
    </>
  )
}

export default App
