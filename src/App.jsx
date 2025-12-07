import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Partnership from './components/Partnership'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navigation theme={theme} setTheme={setTheme}/>
      <Hero />
      <Partnership />
      <Services />
      <Testimonial />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App