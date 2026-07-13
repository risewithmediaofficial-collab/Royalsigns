import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatButtons from './components/FloatButtons';
import QuoteFormModal from './components/QuoteFormModal';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="main-content-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatButtons />
        <QuoteFormModal />
      </div>
    </Router>
  );
}

export default App;
