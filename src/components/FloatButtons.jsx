import React from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import './FloatButtons.css';

export default function FloatButtons() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Royal%20Signs%2C%20I%20am%20interested%20in%20getting%20a%20quotation%20for%20a%20custom%20sign%20board.";
  const callUrl = "tel:+919876543210";

  const triggerQuoteModal = () => {
    const event = new CustomEvent('toggle-quote-modal', { detail: { open: true } });
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Floating Desktop & Mobile WhatsApp Widget */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float glow-yellow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
        <span className="tooltip-text">Chat with us</span>
      </a>

      {/* Sticky Bottom Actions Bar (Mobile Only) */}
      <div className="mobile-sticky-actions">
        <a href={callUrl} className="sticky-btn sticky-call">
          <Phone size={18} />
          Call Now
        </a>
        <button onClick={triggerQuoteModal} className="sticky-btn sticky-quote">
          <FileText size={18} />
          Free Quote
        </button>
      </div>
    </>
  );
}
