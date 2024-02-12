import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './home/Home';
import About from './about/About';
import Flowers from './flowers/Flowers';
import Contact from './contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Add this container */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;