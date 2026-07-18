import React, { useState } from 'react';
import { ShoppingBag, Landmark, GraduationCap, Building2, ShieldAlert, Coffee, ArrowRight, Utensils, School, TreePalm, Hotel } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';
import './Industries.css';

// Industry images from assets
import imgInd1 from '../assets/royal signs/IMG-20250430-WA0033.jpg.jpeg';
import imgInd2 from '../assets/royal signs/IMG-20241023-WA0106.jpg.jpeg';
import imgInd3 from '../assets/royal signs/IMG-20251125-WA0056.jpg.jpeg';
import imgInd4 from '../assets/royal signs/IMG-20241023-WA0134.jpg.jpeg';
import imgInd5 from '../assets/royal signs/IMG-20260630-WA0036.jpg.jpeg';
import imgInd6 from '../assets/royal signs/IMG_20250222_183019.jpg.jpeg';
import imgInd7 from '../assets/royal signs/IMG-20250504-WA0159.jpg.jpeg';
import imgInd8 from '../assets/royal signs/IMG-20250504-WA0160.jpg.jpeg';
import imgInd9 from '../assets/royal signs/IMG-20251028-WA0007.jpg.jpeg';
import imgInd10 from '../assets/royal signs/IMG-20251028-WA0008.jpg.jpeg';
import imgInd11 from '../assets/royal signs/IMG-20251219-WA0010.jpg.jpeg';
import imgInd12 from '../assets/royal signs/IMG-20250613-WA0023.jpg.jpeg';

// New Industry images from assets
import imgCafeMain from '../assets/royal signs/IMG_20250222_183029.jpg.jpeg';
import imgCafeExtra1 from '../assets/royal signs/IMG_20250222_183033.jpg.jpeg';
import imgCafeExtra2 from '../assets/royal signs/IMG-20251206-WA0040.jpg.jpeg';

import imgRestMain from '../assets/royal signs/IMG-20250905-WA0027.jpg.jpeg';
import imgRestExtra1 from '../assets/royal signs/IMG-20250909-WA0063.jpg.jpeg';
import imgRestExtra2 from '../assets/royal signs/IMG-20250504-WA0154.jpg.jpeg';

import imgCollMain from '../assets/royal signs/IMG_20260130_161425.jpg.jpeg';
import imgCollExtra1 from '../assets/royal signs/IMG_20260130_161432.jpg.jpeg';
import imgCollExtra2 from '../assets/royal signs/IMG_20260130_161438.jpg.jpeg';

import imgResMain from '../assets/royal signs/IMG-20260630-WA0037.jpg.jpeg';
import imgResExtra1 from '../assets/royal signs/IMG-20260617-WA0041.jpg.jpeg';
import imgResExtra2 from '../assets/royal signs/IMG_20260713_155258.jpg.jpeg';


// Subcomponent for responsive fast-loading industry image
function IndustryCardImage({ src, categoryIcon }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="scroll-stack-image-frame" style={{ border: 'none' }}>
      {!isLoaded && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="smh-card-spinner" />
        </div>
      )}
      {src ? (
        <img
          src={src}
          alt="Industry sector work"
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : null}
      <div className="scroll-stack-category-badge">
        {categoryIcon}
      </div>
    </div>
  );
}

export default function Industries() {
  const industries = [
    {
      id: 1,
      title: "Retail & Showrooms",
      icon: <ShoppingBag size={36} />,
      tagline: "Vibrant high-street storefront branding",
      solution: "Raised Acrylic 3D illuminated letters, full-facade ACP sheet panels, flexible glass-mounted LED neon tubes, and outdoor double-sided LED flashing boards to capture maximum walk-in customers.",
      commonService: "LED & ACP Sign Boards",
      image: imgInd1,
      extraImages: [imgInd7, imgInd8]
    },
    {
      id: 2,
      title: "Healthcare & Hospitals",
      icon: <Landmark size={36} />,
      tagline: "Clear emergency & path directional signage",
      solution: "LED backlit emergency signs, photoluminescent (glow-in-the-dark) exit safety boards, hospital gate name boards, floor plan displays, and clinician cabin acrylic tags.",
      commonService: "Glow & Directional Signages",
      image: imgInd2,
      extraImages: [imgInd9, imgInd10]
    },
    {
      id: 3,
      title: "Schools & Academies",
      icon: <School size={36} />,
      tagline: "Safe, welcoming campus directional layouts",
      solution: "Main gate monument pillar signs, classroom identification door plates, directory map stands, playground safety signs, and colorful wall mural prints.",
      commonService: "Directional & Door Signs",
      image: imgInd3,
      extraImages: [imgInd11, imgInd12]
    },
    {
      id: 4,
      title: "Colleges & Universities",
      icon: <GraduationCap size={36} />,
      tagline: "Monumental architectural structures & block letters",
      solution: "Giant stainless steel (SS) and metal channel lettering, double-sided pylon road signs, large-scale campus directory maps, and department name boards.",
      commonService: "SS/MS Monument Signage",
      image: imgCollMain,
      extraImages: [imgCollExtra1, imgCollExtra2]
    },
    {
      id: 5,
      title: "Cafes & Coffee Shops",
      icon: <Coffee size={36} />,
      tagline: "Chic, glowing neon scripts & window signs",
      solution: "Eye-catching custom LED neon scripts, acrylic light boxes, warm backlit signs, and menu boards that create a cozy, photogenic ambiance for modern cafe interiors.",
      commonService: "Neon & Acrylic Signs",
      image: imgCafeMain,
      extraImages: [imgCafeExtra1, imgCafeExtra2]
    },
    {
      id: 6,
      title: "Restaurants & Fine Dining",
      icon: <Utensils size={36} />,
      tagline: "Grand entrance facade & digital menu displays",
      solution: "High-end ACP 3D illuminated frontages, dual-sided projecting lightboxes, elegant laser-cut metal lettering, and warm interior glow signage to establish premium culinary branding.",
      commonService: "ACP Facade & 3D Letters",
      image: imgRestMain,
      extraImages: [imgRestExtra1, imgRestExtra2]
    },
    {
      id: 7,
      title: "Resorts & Luxury Retreats",
      icon: <TreePalm size={36} />,
      tagline: "Rustic wood finishes & elegant lighting paths",
      solution: "High-durability outdoor signage using warm backlighting, composite wood-textured panels, custom direction arrows, and sleek spa/pool area instructions.",
      commonService: "Rustic & Backlit Signs",
      image: imgResMain,
      extraImages: [imgResExtra1, imgResExtra2]
    },
    {
      id: 8,
      title: "Corporate Offices",
      icon: <Building2 size={36} />,
      tagline: "Professional internal frosted branding",
      solution: "Plotter-cut frosted glass partition films for conference room privacy, edge-lit reception acrylic logos, metallic direction sign boards, and custom wall wallpaper printing.",
      commonService: "Glass Stickers & Interior Branding",
      image: imgInd4,
      extraImages: [imgInd7, imgInd9]
    },
    {
      id: 9,
      title: "Factories & Warehouses",
      icon: <ShieldAlert size={36} />,
      tagline: "Heavy-gauge warning & hazard indicators",
      solution: "Retro-reflective aluminum caution signs, metal safety poster boards, high-durability floor marking layout vinyls, and giant external building logo structures.",
      commonService: "Safety & Heavy Metal Signage",
      image: imgInd5,
      extraImages: [imgInd10, imgInd8]
    },
    {
      id: 10,
      title: "Hospitality & Hotels",
      icon: <Hotel size={36} />,
      tagline: "Sleek, warm-lit aesthetic environments",
      solution: "Custom gold finish metal signs, warm-white backlit acrylic panels, custom script handwriting neon layouts for restaurant walls, and brass room door digits.",
      commonService: "Neon & Metallic Signage",
      image: imgInd6,
      extraImages: [imgInd11, imgInd12]
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
                  {/* Visual Image component with lazy load */}
                  <IndustryCardImage src={ind.image} categoryIcon={ind.icon} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <span className="badge badge-yellow">{ind.commonService}</span>
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 4px', color: 'var(--text-heading)' }}>{ind.title}</h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>{ind.tagline}</span>
                    <p style={{ margin: '0 0 15px', color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>{ind.solution}</p>
                    {/* Extra images thumbnail strip */}
                    {ind.extraImages && ind.extraImages.length > 0 && (
                      <div className="industry-thumb-strip">
                        {ind.extraImages.map((imgSrc, i) => (
                          <div key={i} className="industry-thumb">
                            <img
                              src={imgSrc}
                              alt={`${ind.title} work ${i + 2}`}
                              loading="lazy"
                              decoding="async"
                              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <button onClick={triggerQuoteModal} className="btn btn-yellow" style={{ fontSize: '0.85rem', padding: '8px 18px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
                      Consult Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollStackItem>
            ))}

          </ScrollStack>
        </div>
      </section>
    </div>
  );
}
