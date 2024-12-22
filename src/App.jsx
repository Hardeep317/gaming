// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/navbar'
import Features from './components/Features'

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero/>
    <About />
    <Features />
    </div>
  )
}

export default App