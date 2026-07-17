import React, { useState } from 'react';
import { LayoutGrid, ShoppingBag, Landmark, GraduationCap, Building2, Sparkles } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';
import './Portfolio.css';

// Project images from assets
import imgProj1 from '../assets/royal signs/06d4621ee8660303b0f2fc993bca811f.jpg.jpeg';
import imgProj2 from '../assets/royal signs/IMG-20241023-WA0084.jpg.jpeg';
import imgProj3 from '../assets/royal signs/IMG-20241023-WA0128.jpg.jpeg';
import imgProj4 from '../assets/royal signs/IMG-20250718-WA0009.jpg.jpeg';
import imgProj5 from '../assets/royal signs/IMG-20251002-WA0001.jpg.jpeg';
import imgProj6 from '../assets/royal signs/IMG-20241023-WA0071.jpg.jpeg';
import imgProj7 from '../assets/royal signs/IMG-20250327-WA0090.jpg.jpeg';
import imgProj8 from '../assets/royal signs/IMG-20250327-WA0093.jpg.jpeg';
import imgProj9 from '../assets/royal signs/IMG-20250504-WA0154.jpg.jpeg';
import imgProj10 from '../assets/royal signs/IMG-20251028-WA0006.jpg.jpeg';
import imgProj11 from '../assets/royal signs/IMG-20251206-WA0038.jpg.jpeg';
import imgProj12 from '../assets/royal signs/IMG-20251219-WA0009.jpg.jpeg';


// Subcomponent for responsive fast-loading portfolio image
function PortfolioCardImage({ src, categoryIcon }) {
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
          alt="Project work"
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

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <LayoutGrid size={16} /> },
    { id: 'retail', name: 'Shops & Retail', icon: <ShoppingBag size={16} /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Landmark size={16} /> },
    { id: 'education', name: 'Education', icon: <GraduationCap size={16} /> },
    { id: 'industrial', name: 'Industrial & Office', icon: <Building2 size={16} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Vasant & Co Showroom Facade",
      category: "retail",
      tag: "ACP & Acrylic 3D Letters",
      location: "Krishnagiri Bypass Road",
      year: "2025",
      desc: "Full front elevation ACP cladding with custom illuminated warm-white LED acrylic letters, spanning 45 feet wide.",
      icon: <ShoppingBag size={36} />,
      image: imgProj1
    },
    {
      id: 2,
      title: "Krishnagiri Medical Centre",
      category: "healthcare",
      tag: "Directional Glow Boards & LED",
      location: "Gandhi Nagar, Krishnagiri",
      year: "2024",
      desc: "Emergency signage, entry direction boards, and double-sided green LED cross sign board for doctor clinical cabin.",
      icon: <Landmark size={36} />,
      image: imgProj2
    },
    {
      id: 3,
      title: "School Entrance Arch Board",
      category: "education",
      tag: "Illuminated Name Board",
      location: "Krishnagiri",
      year: "2024",
      desc: "Bold illuminated name board with custom LED modules mounted on the school entrance arch for high visibility.",
      icon: <GraduationCap size={36} />,
      image: imgProj3
    },
    {
      id: 4,
      title: "SIPCOT Electronics Factory Board",
      category: "industrial",
      tag: "Heavy MS Structure & ACP",
      location: "Hosur Industrial Zone",
      year: "2024",
      desc: "Double pillar outdoor sign board standing 15 feet high, built with heavy structural metal channels to resist wind loads.",
      icon: <Building2 size={36} />,
      image: imgProj4
    },
    {
      id: 5,
      title: "Royal Inn Luxury Hotel Lobby",
      category: "retail",
      tag: "Vibrant Neon Sign Boards",
      location: "Gandhi Nagar, Krishnagiri",
      year: "2025",
      desc: "Custom flexible script neon letters in bright pink and cyan, mounted on transparent acrylic backing for reception backdrop.",
      icon: <Sparkles size={36} />,
      image: imgProj5
    },
    {
      id: 6,
      title: "Tech Park Office Interiors",
      category: "industrial",
      tag: "Frosted Glass & Office Branding",
      location: "Service Road, Krishnagiri",
      year: "2025",
      desc: "Branding of 3 floors including frosted privacy sticker panels on glass partitions, direction tags, and acrylic door nameplates.",
      icon: <LayoutGrid size={36} />,
      image: imgProj6
    },
    {
      id: 7,
      title: "Commercial Shop Signage",
      category: "retail",
      tag: "LED Backlit Acrylic Letters",
      location: "Krishnagiri Town",
      year: "2025",
      desc: "Vibrant LED backlit acrylic letter board with premium ACP backing for a high-visibility commercial retail establishment.",
      icon: <ShoppingBag size={36} />,
      image: imgProj7
    },
    {
      id: 8,
      title: "Business Centre Name Board",
      category: "industrial",
      tag: "3D Channel Letter Board",
      location: "Krishnagiri",
      year: "2025",
      desc: "Custom 3D raised channel letters with LED illumination for a professional business centre entrance facade.",
      icon: <Building2 size={36} />,
      image: imgProj8
    },
    {
      id: 9,
      title: "Pharmacy & Medical Shop",
      category: "healthcare",
      tag: "Green LED Pharmacy Board",
      location: "Krishnagiri",
      year: "2025",
      desc: "Standard pharmacy green-cross LED display combined with custom illuminated name board for maximum customer visibility.",
      icon: <Landmark size={36} />,
      image: imgProj9
    },
    {
      id: 10,
      title: "Retail Store Flex Board",
      category: "retail",
      tag: "Backlit Flex & LED Board",
      location: "Krishnagiri Market",
      year: "2025",
      desc: "Large format backlit flex board with custom design and LED strip lighting for high-impact storefront presence.",
      icon: <ShoppingBag size={36} />,
      image: imgProj10
    },
    {
      id: 11,
      title: "Educational Institution Gate",
      category: "education",
      tag: "Steel & ACP Gate Board",
      location: "Krishnagiri District",
      year: "2025",
      desc: "Heavy-duty ACP and steel frame gate board for educational institution with bold lettering and weather-resistant finish.",
      icon: <GraduationCap size={36} />,
      image: imgProj11
    },
    {
      id: 12,
      title: "Clinic & Diagnostic Centre",
      category: "healthcare",
      tag: "LED Signage & Branding",
      location: "Krishnagiri",
      year: "2025",
      desc: "Complete signage package for clinic including LED name board, direction signs, and window vinyl branding.",
      icon: <Landmark size={36} />,
      image: imgProj12
    }
  ];


  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      {/* Header */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <span className="badge badge-yellow">Our Creations</span>
          <h1>Project Portfolio</h1>
          <p>Explore some of our recent sign board and branding installations in Krishnagiri.</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="portfolio-gallery-section section-padding">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Project ScrollStack */}
          <ScrollStack useWindowScroll={true} itemDistance={30} itemScale={0.02} itemStackDistance={20} className="portfolio-scrollstack">
            {filteredProjects.map((proj) => (
              <ScrollStackItem key={proj.id} itemClassName="portfolio-stack-card">
                <div className="stack-card-content">
                  {/* Visual Image component with lazy load */}
                  <PortfolioCardImage src={proj.image} categoryIcon={proj.icon} />
                  <div>
                    <span className="badge badge-red" style={{ marginBottom: '8px', display: 'inline-block' }}>{proj.tag}</span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 10px', color: 'var(--text-heading)' }}>{proj.title}</h3>
                    <p style={{ margin: '0 0 15px', color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>{proj.desc}</p>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <span><strong>Year:</strong> {proj.year}</span>
                      <span><strong>Location:</strong> {proj.location}</span>
                    </div>
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
