import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Testimonial from './components/Pages/Testimonials/Testimonial'
import GetStarted from './components/Pages/GetStarted/GetStarted'
import Footer from './components/Pages/Footer/Footer'
import EndPage from './components/Pages/EndPage/EndPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Testimonial/>
      <GetStarted/>
      <Footer/>
      <EndPage/>
    </div>
  )
}

export default App
