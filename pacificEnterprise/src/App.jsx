import './App.css'
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './common/nav';
import { Landing } from './Landing';
import Menu from  './Menu';
import { EventCarousel } from './components/EventCarousel';

export function App() {

  return (

      <div >
        <Router basename="/pacificEnterprise">
          <Nav />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="/events" element={<EventCarousel />} />

          </Routes>
        </Router>
      </div>
 
  )
}

export default App
