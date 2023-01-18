import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Footer />
    </>
  )
}

export default App