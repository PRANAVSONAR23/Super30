import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './forRouter/Home';
import Contact from './forRouter/Contact';
import About from './forRouter/About';
import { Link } from 'react-router-dom';

const Ten = () => {
  return (
    <>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>

      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Ten;
