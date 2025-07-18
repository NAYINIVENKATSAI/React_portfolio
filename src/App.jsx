import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Intro from './assets/components/Intro/Intro'
import Skills from './assets/components/Skills/skills'
import Works from './assets/components/Works/works'
import Contact from './assets/components/Contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
