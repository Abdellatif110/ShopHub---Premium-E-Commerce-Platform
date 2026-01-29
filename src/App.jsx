import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Section from './components/Section';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
import Tracking from './components/Tracking';
import './App.css';

function AppContent() {
  return (
    <div className="app-container">
      <Navigation />

      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
