// IMPORTS
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx'; 
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';

// COMPONENT
function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
