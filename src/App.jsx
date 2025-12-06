import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Partnership from './components/Partnership'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Teams from './components/Teams'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navigation theme={theme} setTheme={setTheme}/>
      <Hero />
      <Partnership />
      <Services />
      <Testimonial />
      <Teams />
    </div>
  )
}

export default App