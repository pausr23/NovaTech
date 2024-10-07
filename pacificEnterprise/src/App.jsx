import './App.css'
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './common/nav';
import { Landing } from './Landing';
import Menu from  './Menu';

export function App() {

  return (

      <div >
        <Router>
          <Nav />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />}/>
          </Routes>
        </Router>
      </div>
 
  )
}

export default App
