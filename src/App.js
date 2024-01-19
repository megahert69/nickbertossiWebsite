import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Media from './pages/Media'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Gigs from './pages/Gigs'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact component={Home} />
          <Route path="/Media" element={<Media />} exact component={Media} />
          <Route path="/About" element={<About />} exact component={About} />
          <Route path="/Contact" element={<Contact />} exact component={Contact} />
          <Route path="/Gallery" element={<Gallery />} exact component={Gallery} />
          <Route path="/Gigs" element={<Gigs />} exact component={Gigs} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
