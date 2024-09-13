import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './AboutUs';
import { Landing } from './Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './common/nav';

export function App() {

  return (

    <>

      <div >
        <Router>
          <Nav />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
