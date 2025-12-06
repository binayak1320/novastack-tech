import React, { useState } from 'react'
import Navigation from './components/Navigation'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navigation theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App