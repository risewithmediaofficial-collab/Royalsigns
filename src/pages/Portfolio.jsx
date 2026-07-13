import React, { useState } from 'react';
import { LayoutGrid, ShoppingBag, Landmark, GraduationCap, Building2, MapPin, Calendar } from 'lucide-react';
import './Portfolio.css';

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
      bgGradient: "linear-gradient(135deg, #1e1e24 0%, #d62828 100%)"
    },
    {
      id: 2,
      title: "Krishnagiri Medical Centre Gates",
      category: "healthcare",
      tag: "Directional Glow Boards & Main LED",
      location: "Gandhi Nagar, Krishnagiri",
      year: "2024",
      desc: "Emergency signage, entry direction boards, and double-sided green LED cross sign board for doctor clinical cabin.",
      bgGradient: "linear-gradient(135deg, #111e25 0%, #10b981 100%)"
    },
    {
      id: 3,
      title: "Narayana Public School Entrance",
      category: "education",
      tag: "SS 3D Metal Letters",
      location: "Rayakottai Road, Krishnagiri",
      year: "2025",
      desc: "High-grade 304 stainless steel letters with back-lit warm LEDs mounted on solid concrete gate pillar structure.",
      bgGradient: "linear-gradient(135deg, #1c1917 0%, #f4b400 100%)"
    },
    {
      id: 4,
      title: "SIPCOT Electronics Factory Board",
      category: "industrial",
      tag: "Heavy MS Structure & ACP",
      location: "Hosur Industrial Zone",
      year: "2024",
      desc: "Double pillar outdoor sign board standing 15 feet high, built with heavy structural metal channels to resist wind loads.",
      bgGradient: "linear-gradient(135deg, #1e293b 0%, #64748b 100%)"
    },
    {
      id: 5,
      title: "Royal Inn Luxury Hotel Lobby",
      category: "retail",
      tag: "Vibrant Neon Sign Boards",
      location: "Gandhi Nagar, Krishnagiri",
      year: "2025",
      desc: "Custom flexible script neon letters in bright pink and cyan, mounted on transparent acrylic backing for reception backdrop.",
      bgGradient: "linear-gradient(135deg, #2e1065 0%, #d946ef 100%)"
    },
    {
      id: 6,
      title: "Tech Park Office Interiors",
      category: "industrial",
      tag: "Frosted Glass & Office Branding",
      location: "Service Road, Krishnagiri",
      year: "2025",
      desc: "Branding of 3 floors including frosted privacy sticker panels on glass partitions, direction tags, and acrylic door nameplates.",
      bgGradient: "linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)"
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

          {/* Project List */}
          <div className="portfolio-grid grid-3">
            {filteredProjects.map((proj) => (
              <div className="card project-card-item" key={proj.id}>
                {/* Visual mockup banner representing the board layout */}
                <div 
                  className="project-mock-banner" 
                  style={{ background: proj.bgGradient }}
                >
                  <div className="mock-banner-text">
                    <span className="mock-glow-text">{proj.title.split(' ')[0]}</span>
                  </div>
                  <span className="project-year-badge">
                    <Calendar size={12} /> {proj.year}
                  </span>
                </div>

                <div className="project-details">
                  <div className="project-category-row">
                    <span className="badge badge-red">{proj.tag}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  
                  <div className="project-meta-footer">
                    <div className="meta-item">
                      <MapPin size={14} className="icon-yellow" />
                      <span>{proj.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
