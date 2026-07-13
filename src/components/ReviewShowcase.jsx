import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import './ReviewShowcase.css';

export default function ReviewShowcase() {
  const reviews = [
    {
      id: 1,
      name: "Sathish Kumar",
      role: "Showroom Owner",
      text: "Great experience with Royal Signs! They fabricated a beautiful double-sided LED sign board for my showroom in Krishnagiri. Fast delivery and neat installation.",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya Rajan",
      role: "Cafe Founder",
      text: "The neon glow signage they created for our cafe is a huge hit! Excellent craftsmanship, vibrant colours, and very professional team.",
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Dr. Vinoth Kumar",
      role: "Hospital Administrator",
      text: "Ordered emergency directional sign boards and a main ACP 3D letter board for our clinic. The materials used are weather-resistant and look highly premium.",
      rating: 5,
      date: "3 months ago"
    }
  ];

  return (
    <section className="reviews-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-yellow">Reviews & Trust</span>
          <h2>What Our <span className="logo-accent">Clients Say</span></h2>
          <p>Read honest feedback from business owners and retailers across Krishnagiri.</p>
        </div>

        <div className="reviews-summary-card glass-panel">
          <div className="summary-left">
            <div className="g-logo">G</div>
            <div className="summary-numbers">
              <h3>4.7<span>/5</span></h3>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={i < 4 ? "#f4b400" : "none"} color="#f4b400" />
                ))}
              </div>
              <p>Based on 168+ Google Reviews</p>
            </div>
          </div>
          <div className="summary-right">
            <div className="trust-badge">
              <ShieldCheck size={28} className="icon-yellow" />
              <div>
                <h4>100% Authentic Ratings</h4>
                <p>Verified reviews submitted directly by clients on Google Maps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid grid-3">
          {reviews.map((rev) => (
            <div className="card review-card" key={rev.id}>
              <Quote className="quote-icon" size={32} />
              <div className="review-rating">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f4b400" color="#f4b400" />
                ))}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <div className="review-author">
                <div>
                  <h4 className="author-name">{rev.name}</h4>
                  <p className="author-role">{rev.role}</p>
                </div>
                <span className="review-date">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
