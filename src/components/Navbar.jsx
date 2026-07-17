import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import royalLogo from '../assets/Royal LOGO.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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

  // Portal menu — renders directly into document.body, outside all stacking contexts
  const mobileMenu = ReactDOM.createPortal(
    <div
      className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}
      // Use inert instead of aria-hidden — prevents focus trap and accessibility warnings
      {...(!isOpen ? { inert: '' } : {})}
    >
      {/* Header row */}
      <div className="mobile-drawer-header">
        <Link to="/" onClick={() => setIsOpen(false)} className="mobile-drawer-logo">
          <img src={royalLogo} alt="Royal Signs" className="mobile-logo-img" />
          <span className="mobile-slogan"><em>Change Your Style</em></span>
        </Link>
        <button
          className="mobile-drawer-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Links */}
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
          onClick={() => { setIsOpen(false); triggerQuoteModal(); }}
          className="btn btn-yellow mobile-quote-btn"
        >
          Get Free Quote
        </button>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="nav-logo">
            <img src={royalLogo} alt="Royal Signs" className="nav-logo-img" />
            <span className="nav-slogan"><em>Change Your Style</em></span>
          </Link>

          {/* Desktop nav */}
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
            {/* Only show hamburger when menu is closed */}
            {!isOpen && (
              <button
                className="mobile-toggle"
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Portaled fullscreen menu — at body level, above everything */}
      {mobileMenu}
    </>
  );
}
