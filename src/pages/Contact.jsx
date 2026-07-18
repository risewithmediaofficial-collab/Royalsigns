import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    boardType: 'LED Sign Boards',
    details: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <span className="badge badge-yellow">Get In Touch</span>
          <h1>Contact Royal Signs</h1>
          <p>Let's discuss your branding project. Reach out to us for site survey and free estimation.</p>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="contact-main section-padding">
        <div className="container contact-grid">
          {/* Info Card Panel */}
          <div className="contact-info-panel">
            <h2>Our Shop Location & Info</h2>
            <p className="panel-desc">We deliver premium signage and branding solutions for businesses across Chennai and Krishnagiri. Reach out to us for a site survey or a free consultation.</p>

            <ul className="info-list">
              <li>
                <div className="info-icon-circle">
                  <MapPin size={22} className="icon-yellow" />
                </div>
                <div>
                  <h4>Office Address</h4>
                  <p>No: 13, 6, Tamilar St, Loganathan Nagar, Padmanabha Nagar, Choolaimedu, Chennai, Tamil Nadu 600094</p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <MapPin size={22} className="icon-red" />
                </div>
                <div>
                  <h4>Branch Address (Krishnagiri)</h4>
                  <p>#3/243 Naveen Arcade, CSB Bank Basement, Salem Highway Service Road, Krishnagiri – 635002</p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <MapPin size={22} className="icon-yellow" style={{ opacity: 0.9 }} />
                </div>
                <div>
                  <h4>Branch Address (Bengaluru)</h4>
                  <p>DR G Nagar, 1st Main Rd, 2nd Stage, Rajagopala Nagar, Peenya, Bengaluru, Karnataka 560091</p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <MapPin size={22} className="icon-red" style={{ opacity: 0.8 }} />
                </div>
                <div>
                  <h4>Factory Address</h4>
                  <p>#31, Thayar Sahib Street, 1st Lane, Ellis Road, Chennai – 600002</p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <Phone size={20} className="icon-yellow" />
                </div>
                <div>
                  <h4>Call Our Desk</h4>
                  <p><a href="tel:+919791378755" className="link-hover">+91 97913 78755</a></p>
                  <p><a href="tel:+917845008323" className="link-hover">+91 78450 08323</a></p>
                  <p className="light-sub text-xs">For emergency repair support or order status</p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <Mail size={20} className="icon-red" />
                </div>
                <div>
                  <h4>Email Inquiries</h4>
                  <p><a href="mailto:royalsigns1808@gmail.com" className="link-hover">royalsigns1808@gmail.com</a></p>
                </div>
              </li>

              <li>
                <div className="info-icon-circle">
                  <Clock size={20} className="icon-red" />
                </div>
                <div>
                  <h4>Operational Hours</h4>
                  <p>Monday – Saturday: <strong className="glow-yellow">10:00 AM – 07:30 PM</strong></p>
                  <p className="closed-status">Sunday: Closed</p>
                </div>
              </li>
            </ul>

            <div className="quick-buttons-row">
              <a href="tel:+919791378755" className="btn btn-red">
                <Phone size={16} /> Call Now
              </a>
              <a 
                href="https://wa.me/919791378755?text=Hi%20Royal%20Signs,%20I'm%20writing%20from%20your%20website%20to%20discuss%20a%20branding%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-yellow"
              >
                <MessageSquare size={16} fill="currentColor" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Form Panel */}
          <div className="card contact-form-panel">
            {!submitted ? (
              <>
                <h3>Send Us a Message</h3>
                <p>Fill out this form and we'll prepare a custom quotation draft.</p>
                
                <form onSubmit={handleSubmit} className="contact-inline-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? 'error-input' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your 10 digit phone number"
                      className={errors.phone ? 'error-input' : ''}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@gmail.com"
                      className={errors.email ? 'error-input' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-boardType">Signage Board Type</label>
                    <select
                      id="contact-boardType"
                      name="boardType"
                      value={formData.boardType}
                      onChange={handleChange}
                    >
                      <option value="LED Sign Boards">LED Sign Boards</option>
                      <option value="ACP Sign Boards">ACP Sign Boards</option>
                      <option value="Acrylic Sign Boards">Acrylic Sign Boards</option>
                      <option value="3D Letter Boards">3D Letter Boards</option>
                      <option value="Neon Sign Boards">Neon Sign Boards</option>
                      <option value="Flex/Vinyl Printing">Flex & Vinyl Printing</option>
                      <option value="Vehicle/Shop Branding">Vehicle & Shop Branding</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-details">Dimensions & Specs (Optional)</label>
                    <textarea
                      id="contact-details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows="3"
                      placeholder="e.g. 10x3 feet, outdoor ACP board with red acrylic letters..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-yellow w-full">
                    Submit Project Request <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success-inner">
                <CheckCircle size={56} className="success-icon glow-yellow" />
                <h3>Thank You!</h3>
                <p>We have successfully received your inquiry for <strong>{formData.boardType}</strong>.</p>
                <p>Our lead fabricator will contact you at <strong>{formData.phone}</strong> to schedule a site measurement review.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-outline"
                  style={{ marginTop: '15px' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Segment */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-wrapper-card glass-panel">
            <div className="map-header">
              <MapPin size={24} className="icon-yellow" />
              <div>
                <h3>Find Us On Google Maps</h3>
                <p>Gandhi Nagar Service Road (Naveen Arcade), Krishnagiri, Tamil Nadu</p>
              </div>
            </div>
            <iframe 
              title="Royal Signs Workshop Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.9678122678857!2d78.2173489!3d12.518625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16e911252033%3A0xe54fb0ce0cecb52b!2sNaveen%20Arcade%2C%20Gandhi%20Nagar%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="380" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
