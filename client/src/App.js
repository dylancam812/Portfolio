import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, Projects, About, Contact } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('no-scroll', 'scrollable');

    if (window.innerWidth <= 490) {
      if (location.pathname === '/' || location.pathname === '/About' || location.pathname === '/Contact') {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.add('scrollable');
      }
    }

    return () => {
      document.body.classList.remove('no-scroll', 'scrollable');
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
