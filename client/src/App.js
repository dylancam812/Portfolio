import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Projects, About, Contact } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div>
      <Navbar />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/Projects" element={<Projects />} /></Routes>
      <Routes><Route path="/About" element={<About />} /></Routes>
      {/* <Routes><Route path="/Skills" element={<Skills />} /></Routes> */}
      <Routes><Route path="/Contact" element={<Contact />} /></Routes>
    </div>
  </div>
);

export default App;
