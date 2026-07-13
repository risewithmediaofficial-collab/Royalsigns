import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  const triggerQuoteModal = () => {
    const event = new CustomEvent('toggle-quote-modal', { detail: { open: true } });
    window.dispatchEvent(event);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="nav-logo">
          <Flame className="logo-icon glow-red" />
          <span className="logo-text">
            ROYAL<span className="logo-accent">SIGNS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button onClick={triggerQuoteModal} className="btn btn-yellow nav-quote-btn">
            Get Free Quote
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              triggerQuoteModal();
            }} 
            className="btn btn-yellow mobile-quote-btn"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
