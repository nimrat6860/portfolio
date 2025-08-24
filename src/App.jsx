import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Technology from './components/technologies/Technology'
import Projects from './components/Projects/Projects'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Technology/>
      <Education/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
