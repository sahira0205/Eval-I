import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import Women from './Components/Women';
import Men from './Components/Men';
import Kids from "./Components/Kids"
import './index.css';
import './categories.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar is shared across all pages */}
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home component for the main page */}
          {/* <Route path="/men" element={<Men />} />  */}
         <Route path="/women" element={<Women />} /> 
         <Route path="/men" element={<Men />} /> 
          <Route path="/kids" element={<Kids />} /> 
        </Routes>
        
        <Footer /> {/* Footer is also shared across all pages */}
      
      </div>
    </Router>
  );
}

export default App;
