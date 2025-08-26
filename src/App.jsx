// IMPORTS
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx'; 
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Features from './sections/Features.jsx';
import Contact from './sections/Contact.jsx';

// COMPONENT
function App() {

  return (
    <>
      <div>
        <main className='app'>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Features />
        <Contact />
        </main>

        <footer>
          <p>© 2025 Sunny Wu.</p>
        </footer>
      </div>
    </>
  )
}

export default App
