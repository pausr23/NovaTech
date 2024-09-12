import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './AboutUs';
import Menu from  './Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {

  return (
    <>
      <div className='m-[5.556vw]'>
        <Router>
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />}/>
          </Routes>
        </Router>
     
      </div>
    </>
  )
}

export default App
