import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatButtons from './components/FloatButtons';
import QuoteFormModal from './components/QuoteFormModal';
import ScrollToTop from './components/ScrollToTop';

// Lazy-load pages so each page's images only load when that route is visited
const Home       = lazy(() => import('./pages/Home'));
const About      = lazy(() => import('./pages/About'));
const Services   = lazy(() => import('./pages/Services'));
const Portfolio  = lazy(() => import('./pages/Portfolio'));
const Industries = lazy(() => import('./pages/Industries'));
const Contact    = lazy(() => import('./pages/Contact'));

import './App.css';

// Minimal full-screen spinner shown while a lazy page chunk loads
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="smh-card-spinner" style={{ width: 40, height: 40 }} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />

        {/* Main Content Area — Suspense wraps all lazy pages */}
        <main className="main-content-layout">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/about"      element={<About />} />
              <Route path="/services"   element={<Services />} />
              <Route path="/portfolio"  element={<Portfolio />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/contact"    element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatButtons />
        <QuoteFormModal />
      </div>
    </Router>
  );
}

export default App;
