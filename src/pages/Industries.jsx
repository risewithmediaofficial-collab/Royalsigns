import React from 'react';
import { ShoppingBag, Landmark, GraduationCap, Building2, ShieldAlert, Coffee, ArrowRight, Image } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';
import './Industries.css';

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: "Retail & Showrooms",
      icon: <ShoppingBag size={36} />,
      tagline: "Vibrant high-street storefront branding",
      solution: "Raised Acrylic 3D illuminated letters, full-facade ACP sheet panels, flexible glass-mounted LED neon tubes, and outdoor double-sided LED flashing boards to capture maximum walk-in customers.",
      commonService: "LED & ACP Sign Boards"
    },
    {
      id: 2,
      title: "Healthcare & Hospitals",
      icon: <Landmark size={36} />,
      tagline: "Clear emergency & path directional signage",
      solution: "LED backlit emergency signs, photoluminescent (glow-in-the-dark) exit safety boards, hospital gate name boards, floor plan displays, and clinician cabin acrylic tags.",
      commonService: "Glow & Directional Signages"
    },
    {
      id: 3,
      title: "Education & Schools",
      icon: <GraduationCap size={36} />,
      tagline: "Heavy-duty outdoor institutional structures",
      solution: "Massive stainless steel (SS) or mild steel (MS) channel letters, laser-welded and fitted with backlights. Designed to withstand wind loads on open campus entry pillars.",
      commonService: "SS/MS 3D Letter Boards"
    },
    {
      id: 4,
      title: "Corporate Offices",
      icon: <Building2 size={36} />,
      tagline: "Professional internal frosted branding",
      solution: "Plotter-cut frosted glass partition films for conference room privacy, edge-lit reception acrylic logos, metallic direction sign boards, and custom wall wallpaper printing.",
      commonService: "Glass Stickers & Interior Branding"
    },
    {
      id: 5,
      title: "Factories & Warehouses",
      icon: <ShieldAlert size={36} />,
      tagline: "Heavy-gauge warning & hazard indicators",
      solution: "Retro-reflective aluminum caution signs, metal safety poster boards, high-durability floor marking layout vinyls, and giant external building logo structures.",
      commonService: "Safety & Heavy Metal Signage"
    },
    {
      id: 6,
      title: "Hospitality & Hotels",
      icon: <Coffee size={36} />,
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

      {/* Industries ScrollStack */}
      <section className="industries-grid-section section-padding">
        <div className="container">
          <ScrollStack useWindowScroll={true} itemDistance={30} itemScale={0.02} itemStackDistance={20} className="industries-scrollstack">
            {industries.map((ind) => (
              <ScrollStackItem key={ind.id} itemClassName="industry-stack-card">
                <div className="stack-card-content">
                  {/* Image Frame Placeholder */}
                  <div className="scroll-stack-image-frame">
                    <Image size={32} strokeWidth={1.5} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Sector Visual</span>
                    {/* Small category icon badge */}
                    <div className="scroll-stack-category-badge">
                      {ind.icon}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span className="badge badge-yellow">{ind.commonService}</span>
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--text-heading)' }}>{ind.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>{ind.tagline}</span>
                    <p style={{ margin: '0 0 15px', color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>{ind.solution}</p>
                    <button onClick={triggerQuoteModal} className="btn btn-yellow" style={{ fontSize: '0.85rem', padding: '8px 18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      Consult Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
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
