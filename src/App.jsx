import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
