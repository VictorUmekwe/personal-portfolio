import React from 'react'
import NavigationBar from './components/NavigationBar'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
    <NavigationBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App