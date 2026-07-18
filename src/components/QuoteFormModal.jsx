import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import './QuoteFormModal.css';

export default function QuoteFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'LED Sign Boards',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleToggle = (e) => {
      if (e.detail && typeof e.detail.open !== 'undefined') {
        setIsOpen(e.detail.open);
        if (e.detail.open === false) {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', email: '', service: 'LED Sign Boards', message: '' });
          setErrors({});
        }
      } else {
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('toggle-quote-modal', handleToggle);
    return () => window.removeEventListener('toggle-quote-modal', handleToggle);
  }, []);

  // Lock body scroll when modal is open — iOS safe
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validateForm();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    // Submit form logic (mocking successful submission)
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div 
        className="modal-content glass-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>

        <div className="modal-scroll-inner">
        {!isSubmitted ? (
          <>
            <div className="modal-header">
              <h2>Request a <span className="logo-accent">Free Quote</span></h2>
              <p>Tell us about your signage requirements, and we will get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="modal-name">Your Name *</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit number"
                    className={errors.phone ? 'error-input' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@business.com"
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-service">Signage Required</label>
                <select
                  id="modal-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="LED Sign Boards">LED Sign Boards</option>
                  <option value="ACP Elevations">ACP Elevations</option>
                  <option value="SS / Brass / Metal Letters">SS / Brass / Metal Letters</option>
                  <option value="Acrylic / Trimcap / Liquid Letters">Acrylic / Trimcap / Liquid Letters</option>
                  <option value="Unipoles">Unipoles</option>
                  <option value="LED Video Walls & Scrolling Boards">LED Video Walls & Scrolling Boards</option>
                  <option value="Concept Signages">Concept Signages</option>
                  <option value="Neon Sign Boards">Neon Sign Boards</option>
                  <option value="Flex & Vinyl Printing">Flex & Vinyl Printing</option>
                  <option value="Vehicle & Shop Branding">Vehicle & Shop Branding</option>
                  <option value="Repair & Maintenance">Repair & Maintenance</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Requirements / Message</label>
                <textarea
                  id="modal-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="e.g. Size, location, indoor/outdoor details..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-yellow w-full">
                Submit Inquiry <Send size={16} />
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <CheckCircle2 size={64} className="success-icon glow-yellow" />
            <h2>Inquiry Sent Successfully!</h2>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our branding & design consultant will contact you at <strong>{formData.phone}</strong> shortly to discuss your <strong>{formData.service}</strong> requirement.
            </p>
            <button 
              onClick={() => setIsOpen(false)} 
              className="btn btn-outline"
              style={{ marginTop: '20px' }}
            >
              Close Window
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
