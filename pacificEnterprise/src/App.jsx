import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {

  return (
    <>
      return (
      <Router>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} /> 
        </Routes>
      </Router>
      );
    </>
  )
}

export default App
