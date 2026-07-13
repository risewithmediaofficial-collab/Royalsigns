import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Flame, Star } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* About & Reviews Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <Flame className="logo-icon glow-red" />
            <span className="logo-text">ROYAL<span className="logo-accent">SIGNS</span></span>
          </Link>
          <p className="footer-desc">
            Premium signage and branding solutions with professional craftsmanship and quality materials. We serve businesses across Chennai and Krishnagiri.
          </p>
          <div className="rating-card">
            <div className="rating-stars">
              <Star size={18} fill="#f4b400" color="#f4b400" />
              <Star size={18} fill="#f4b400" color="#f4b400" />
              <Star size={18} fill="#f4b400" color="#f4b400" />
              <Star size={18} fill="#f4b400" color="#f4b400" />
              <Star size={18} fill="#f4b400" color="#f4b400" data-half="true" style={{ opacity: 0.85 }} />
            </div>
            <span className="rating-score">4.7 / 5 Stars</span>
            <p className="rating-text">Over 168+ Happy Customers</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/contact">Contact Page</Link></li>
          </ul>
        </div>

        {/* Contact Info & Hours */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={20} className="footer-icon-yellow" />
              <span>
                Royal Signs, No. 13/6, Tamilar Street, Loganathan Nagar, Padmanabha Nagar, Choolaimedu, Chennai – 600094
              </span>
            </li>
            <li>
              <Phone size={18} className="footer-icon-red" />
              <a href="tel:+919791378755">+91 97913 78755</a>
            </li>
            <li>
              <Mail size={18} className="footer-icon-yellow" />
              <a href="mailto:info@royalsigns.in">info@royalsigns.in</a>
            </li>
            <li>
              <Clock size={18} className="footer-icon-red" />
              <div>
                <p>Monday - Saturday:</p>
                <p className="highlight-text">10:00 AM - 07:30 PM</p>
                <p className="closed-text">Sunday: Closed</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Map Column */}
        <div className="footer-col map-col">
          <h3>Find Us</h3>
          <div className="footer-map-container">
            <iframe 
              title="Royal Signs Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.9678122678857!2d78.2173489!3d12.518625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16e911252033%3A0xe54fb0ce0cecb52b!2sNaveen%20Arcade%2C%20Gandhi%20Nagar%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {currentYear} Royal Signs. All Rights Reserved.</p>
          <p>Sign Board Manufacturer in Krishnagiri</p>
        </div>
      </div>
    </footer>
  );
}
