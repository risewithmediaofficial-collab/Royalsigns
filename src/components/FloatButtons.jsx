import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatButtons.css';

export default function FloatButtons() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Royal%20Signs%2C%20I%20am%20interested%20in%20getting%20a%20quotation%20for%20a%20custom%20sign%20board.";

  return (
    <>
      {/* Floating WhatsApp Widget — desktop & mobile */}
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
    </>
  );
}
