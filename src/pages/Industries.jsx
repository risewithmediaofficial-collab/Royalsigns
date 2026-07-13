import React from 'react';
import { ShoppingBag, Landmark, GraduationCap, Building2, ShieldAlert, Coffee, ArrowRight } from 'lucide-react';
import './Industries.css';

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: "Retail & Showrooms",
      icon: <ShoppingBag size={32} className="icon-yellow" />,
      tagline: "Vibrant high-street storefront branding",
      solution: "Raised Acrylic 3D illuminated letters, full-facade ACP sheet panels, flexible glass-mounted LED neon tubes, and outdoor double-sided LED flashing boards to capture maximum walk-in customers.",
      commonService: "LED & ACP Sign Boards"
    },
    {
      id: 2,
      title: "Healthcare & Hospitals",
      icon: <Landmark size={32} className="icon-red" />,
      tagline: "Clear emergency & path directional signage",
      solution: "LED backlit emergency signs, photoluminescent (glow-in-the-dark) exit safety boards, hospital gate name boards, floor plan displays, and clinician cabin acrylic tags.",
      commonService: "Glow & Directional Signages"
    },
    {
      id: 3,
      title: "Education & Schools",
      icon: <GraduationCap size={32} className="icon-yellow" />,
      tagline: "Heavy-duty outdoor institutional structures",
      solution: "Massive stainless steel (SS) or mild steel (MS) channel letters, laser-welded and fitted with backlights. Designed to withstand wind loads on open campus entry pillars.",
      commonService: "SS/MS 3D Letter Boards"
    },
    {
      id: 4,
      title: "Corporate Offices",
      icon: <Building2 size={32} className="icon-red" />,
      tagline: "Professional internal frosted branding",
      solution: "Plotter-cut frosted glass partition films for conference room privacy, edge-lit reception acrylic logos, metallic direction sign boards, and custom wall wallpaper printing.",
      commonService: "Glass Stickers & Interior Branding"
    },
    {
      id: 5,
      title: "Factories & Warehouses",
      icon: <ShieldAlert size={32} className="icon-yellow" />,
      tagline: "Heavy-gauge warning & hazard indicators",
      solution: "Retro-reflective aluminum caution signs, metal safety poster boards, high-durability floor marking layout vinyls, and giant external building logo structures.",
      commonService: "Safety & Heavy Metal Signage"
    },
    {
      id: 6,
      title: "Hospitality & Hotels",
      icon: <Coffee size={32} className="icon-red" />,
      tagline: "Sleek, warm-lit aesthetic environments",
      solution: "Custom gold finish metal signs, warm-white backlit acrylic panels, custom script handwriting neon layouts for restaurant walls, and brass room door digits.",
      commonService: "Neon & Metallic Signage"
    }
  ];

  const triggerQuoteModal = () => {
    const event = new CustomEvent('toggle-quote-modal', { detail: { open: true } });
    window.dispatchEvent(event);
  };

  return (
    <div className="industries-page">
      {/* Header */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <span className="badge badge-yellow">Target Sectors</span>
          <h1>Industries We Serve</h1>
          <p>Custom engineered signage layouts tailored to meet specific industrial and commercial needs.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="industries-grid-section section-padding">
        <div className="container grid-3">
          {industries.map((ind) => (
            <div className="card industry-card-detail" key={ind.id}>
              <div className="industry-icon-row">
                <div className="icon-badge glass-panel">{ind.icon}</div>
              </div>
              
              <div className="industry-info">
                <h3>{ind.title}</h3>
                <span className="industry-sub">{ind.tagline}</span>
                <p className="industry-sol">{ind.solution}</p>
              </div>

              <div className="industry-footer">
                <div className="industry-common-badge">
                  <span>Primary: <strong>{ind.commonService}</strong></span>
                </div>
                <button onClick={triggerQuoteModal} className="btn-industry-link">
                  Consult Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="industries-bottom-section section-padding">
        <div className="container text-center custom-solution-box glass-panel">
          <h2>Need a Specialized Layout for Your Business?</h2>
          <p>Whether you require reflective street directional signs or custom lobby metal work, our experienced fabrication engineers can draft layouts matching your plans.</p>
          <button onClick={triggerQuoteModal} className="btn btn-yellow">
            Discuss Custom Project
          </button>
        </div>
      </section>
    </div>
  );
}
