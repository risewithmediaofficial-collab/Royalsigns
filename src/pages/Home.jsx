import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Sparkles, Truck, HeartHandshake, Lightbulb, Grid, 
  CheckSquare, FileText, CheckCircle2, ChevronDown, Phone, Mail, MapPin, 
  Clock, Landmark, Building2, Wrench 
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import IntroAnimation from '../components/ui/scroll-morph-hero';
import './Home.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  // Stats counting logic
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [signages, setSignages] = useState(0);
  const [acpWorks, setAcpWorks] = useState(0);

  useEffect(() => {
    // Stats animation triggers when page loads
    const animateStat = (target, setter, duration = 2000) => {
      let start = 0;
      const end = parseInt(target, 10);
      const increment = Math.max(Math.ceil(end / (duration / 20)), 1);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setter(end);
        } else {
          setter(start);
        }
      }, 20);
    };

    animateStat("11", setExperience);
    animateStat("673", setProjects);
    animateStat("4291", setSignages);
    animateStat("75", setAcpWorks);
  }, []);
  const clientLogos = [
    "TVS Motors", "Adayar Ananda Bhavan", "Apollo Pharmacy", 
    "HDFC Bank", "Vasanth & Co", "Lotus Hotels", "Royal Inn"
  ];

  const services = [
    {
      id: 1,
      title: "LED Sign Boards",
      desc: "Vibrant energy-saving illuminated storefront branding.",
      icon: <Lightbulb size={26} />
    },
    {
      id: 2,
      title: "ACP Boards",
      desc: "Premium grooved composite cladding with elevated text.",
      icon: <Grid size={26} />
    },
    {
      id: 3,
      title: "Acrylic Boards",
      desc: "Crystal clear polished acrylic sheets with glossy aesthetics.",
      icon: <CheckSquare size={26} />
    },
    {
      id: 4,
      title: "3D Letter Boards",
      desc: "Raised metal, stainless steel (SS), or mild steel letters.",
      icon: <Landmark size={26} />
    },
    {
      id: 5,
      title: "Neon Signs",
      desc: "Vibrant customized LED neon script tubes for trendy spots.",
      icon: <Sparkles size={26} />
    },
    {
      id: 6,
      title: "Vehicle Branding",
      desc: "Full and partial cast vinyl wrapping for commercial fleets.",
      icon: <Truck size={26} />
    },
    {
      id: 7,
      title: "Wall Graphics",
      desc: "Custom high-quality wallpaper prints for corporate interiors.",
      icon: <Building2 size={26} />
    },
    {
      id: 8,
      title: "Glass Films",
      desc: "3M frosted window screens and privacy one-way stickers.",
      icon: <ShieldCheck size={26} />
    },
    {
      id: 9,
      title: "Flex Printing",
      desc: "High-speed solvent banner prints for outdoor promotion.",
      icon: <FileText size={26} />
    }
  ];

  const chooseReasons = [
    {
      title: "Premium Materials",
      desc: "We use original 3mm non-fading ACP panels, waterproof Samsung LED modules, and pure virgin acrylics.",
      icon: <ShieldCheck size={24} className="icon-red" />
    },
    {
      title: "Creative Designs",
      desc: "In-house graphic artists model custom 3D computer renderings to demonstrate exact signage layouts.",
      icon: <Sparkles size={24} className="icon-red" />
    },
    {
      title: "Fast Delivery",
      desc: "Equipped with automated laser benders and heavy CNC routers, delivering boards within 5 to 7 days.",
      icon: <Truck size={24} className="icon-red" />
    },
    {
      title: "Expert Installation",
      desc: "Certified heights technicians secure signages with structural anchor brackets and waterproof wiring.",
      icon: <Wrench size={24} className="icon-red" />
    },
    {
      title: "Affordable Pricing",
      desc: "Direct procurement of raw components enables wholesale rates without compromising component durability.",
      icon: <CheckCircle2 size={24} className="icon-red" />
    },
    {
      title: "After Sales Support",
      desc: "We stand behind our work, providing on-call repairs, transformer swap surveys, and light upgrades.",
      icon: <HeartHandshake size={24} className="icon-red" />
    }
  ];

  const portfolioItems = [
    { id: 1, title: "Lalitha Jewellery", category: "shop", label: "Gold Finish SS Letters", col: "span-2", bgGradient: "linear-gradient(135deg, #fef08a 0%, #facc15 100%)" },
    { id: 2, title: "City Multispeciality", category: "hospital", label: "Backlit emergency signage", col: "", bgGradient: "linear-gradient(135deg, #a7f3d0 0%, #059669 100%)" },
    { id: 3, title: "Oakridge Public School", category: "school", label: "SS Letter Frontage", col: "", bgGradient: "linear-gradient(135deg, #fbcfe8 0%, #db2777 100%)" },
    { id: 4, title: "Gourmet Cafe Neon", category: "restaurant", label: "Silicone Neon Backdrop", col: "span-2", bgGradient: "linear-gradient(135deg, #c084fc 0%, #7e22ce 100%)" },
    { id: 5, title: "Metro Tech Hub Entrance", category: "corporate", label: "ACP Cladding Fascia", col: "", bgGradient: "linear-gradient(135deg, #93c5fd 0%, #2563eb 100%)" },
    { id: 6, title: "SIPCOT Cast Steel Plant", category: "industrial", label: "Structural Pylon Board", col: "", bgGradient: "linear-gradient(135deg, #e2e8f0 0%, #475569 100%)" }
  ];

  const filteredPortfolio = portfolioFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === portfolioFilter);

  const processSteps = [
    { step: "01", name: "Consultation", desc: "Site survey & size measures." },
    { step: "02", name: "Design", desc: "3D computerized drafts." },
    { step: "03", name: "Manufacturing", desc: "CNC fabrication & lights wiring." },
    { step: "04", name: "Installation", desc: "Secure wall mount setups." },
    { step: "05", name: "Quality Check", desc: "Lux test & seals review." }
  ];

  const faqs = [
    { q: "How long does a sign board last?", a: "With original Samsung LEDs, waterproof power adapters, and virgin acrylics, our signboards operate optimally for 5 to 7+ years with minimal maintenance." },
    { q: "Do you provide custom design layout assistance?", a: "Yes, once an order is registered, our designers render custom 2D/3D templates showing your brand colors and nighttime illumination views for final consent." },
    { q: "What is your typical production timeframe?", a: "Standard boards take 5 to 7 working days. Bulk corporate branding projects or large structural pylons are scheduled between 10 to 14 days." },
    { q: "Do you provide repair support for existing boards?", a: "Yes! We replace burnt adapters, swap dimmed LED modules, fix loose wiring, and re-clack older weather-damaged ACP sections." }
  ];

  return (
    <div className="home-page-white">
      
      {/* Circle Animation Hero Section */}
      <section className="hero-animation-section">
        <IntroAnimation />
      </section>


      {/* Trusted Clients Slider */}
      <section className="trusted-clients-section">
        <div className="container">
          <p className="trusted-title text-center">TRUSTED BY 673+ PROJECTS ACROSS CHENNAI & KRISHNAGIRI</p>
          <div className="logos-slider-marquee">
            <div className="logos-track">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div className="logo-slide-item" key={index}>
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-white-section section-padding">
        <div className="container about-white-grid">
          <div className="about-visual-box">
            <div className="about-visual-mockup">
              <div className="mockup-cnc-head">CNC ROUTER CUTTING</div>
              <div className="mockup-cutter-beam"></div>
              <div className="mockup-plate-sheet"></div>
            </div>
          </div>

          <div className="about-text-content">
            <span className="badge badge-red">About Us</span>
            <h2>Premium Signage & Branding Solutions for Every Business</h2>
            <p>
              At Royal Signs, we specialize in delivering complete signage and branding solutions with professional craftsmanship and premium quality. From acrylic letters and LED signages to ACP elevations, glazing works, and unipoles, we create signage that strengthens brand identity and adds a premium, professional appearance.
            </p>
            
            {/* Stats list with animated counters */}
            <div className="stats-list-grid">
              <div className="stat-card">
                <h3>{experience}+</h3>
                <p>Years in Business</p>
              </div>
              <div className="stat-card">
                <h3>{projects}+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>{signages}+</h3>
                <p>Signages Installed</p>
              </div>
              <div className="stat-card">
                <h3>{acpWorks}+</h3>
                <p>ACP Elevation Works</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-yellow">Our Services</span>
            <h2>Our Custom Branding Solutions</h2>
            <p>Sleek design layouts, premium materials, and flawless installation services.</p>
          </div>

          <div className="services-white-grid">
            {services.map((srv) => (
              <div className="card service-white-card" key={srv.id}>
                <div className="service-icon-row">
                  <div className="icon-circle-box">{srv.icon}</div>
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <div className="service-card-action">
                  <Link to="/services" className="arrow-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illumination Before/After comparison slider */}
      <section className="comparison-slider-white section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-red">LED Glow Test</span>
            <h2>Illumination Comparison</h2>
            <p>See our signs during the day (unlit) and at night (Samsung LED modules illuminated).</p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-yellow">Why Choose Us</span>
            <h2>Engineered For Long Durability</h2>
            <p>From computerized layout designs to physical scaffolding mounts, we deliver excellence.</p>
          </div>

          <div className="why-choose-list-grid grid-3">
            {chooseReasons.map((reason, idx) => (
              <div className="card why-choose-card-item" key={idx}>
                <div className="why-icon-wrap">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Masonry */}
      <section className="portfolio-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-red">Our Works</span>
            <h2>Recent Installation Projects</h2>
            <p>Browse boards manufactured for shops, clinics, schools, and offices in Gandhi Nagar & nearby regions.</p>
          </div>

          {/* Filters */}
          <div className="portfolio-filters-white">
            <button 
              onClick={() => setPortfolioFilter('all')} 
              className={`filter-white-btn ${portfolioFilter === 'all' ? 'active' : ''}`}
            >
              All Works
            </button>
            <button 
              onClick={() => setPortfolioFilter('shop')} 
              className={`filter-white-btn ${portfolioFilter === 'shop' ? 'active' : ''}`}
            >
              Shops
            </button>
            <button 
              onClick={() => setPortfolioFilter('hospital')} 
              className={`filter-white-btn ${portfolioFilter === 'hospital' ? 'active' : ''}`}
            >
              Hospital
            </button>
            <button 
              onClick={() => setPortfolioFilter('school')} 
              className={`filter-white-btn ${portfolioFilter === 'school' ? 'active' : ''}`}
            >
              School
            </button>
            <button 
              onClick={() => setPortfolioFilter('corporate')} 
              className={`filter-white-btn ${portfolioFilter === 'corporate' ? 'active' : ''}`}
            >
              Corporate
            </button>
            <button 
              onClick={() => setPortfolioFilter('industrial')} 
              className={`filter-white-btn ${portfolioFilter === 'industrial' ? 'active' : ''}`}
            >
              Industrial
            </button>
          </div>

          {/* Masonry Grid */}
          <div className="portfolio-masonry-grid">
            {filteredPortfolio.map((item) => (
              <div 
                className={`masonry-item-wrapper ${item.col}`} 
                key={item.id}
              >
                <div 
                  className="masonry-thumbnail" 
                  style={{ background: item.bgGradient }}
                >
                  <div className="masonry-overlay-info">
                    <h4>{item.title}</h4>
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Process Horizontal Timeline */}
      <section className="process-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-yellow">Workflow</span>
            <h2>Our Seamless Execution Process</h2>
            <p>From initial measurements to diagnostic checklist parameters.</p>
          </div>

          <div className="process-horizontal-container">
            <div className="process-connecting-line">
              <div className="active-glow-line"></div>
            </div>
            
            <div className="process-steps-row">
              {processSteps.map((stp, idx) => (
                <div className="step-horizontal-item" key={idx}>
                  <div className="step-circle">{stp.step}</div>
                  <h4>{stp.name}</h4>
                  <p>{stp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Review Cards */}
      <section className="testimonials-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-red">Testimonials</span>
            <h2>Feedback From Store Owners</h2>
            <p>Verified reviews from local and commercial businesses in Krishnagiri.</p>
          </div>

          <div className="testimonials-white-grid grid-3">
            <div className="card test-white-card">
              <div className="test-header-row">
                <span className="client-avatar">SK</span>
                <div>
                  <h4>Sathish Kumar</h4>
                  <p className="client-meta">Showroom Owner</p>
                </div>
              </div>
              <div className="rating-stars-small">⭐⭐⭐⭐⭐</div>
              <p className="test-body-text">
                "Royal Signs did an outstanding job fabricating our storefront ACP LED name board. The 3D letters look sharp and clean."
              </p>
            </div>

            <div className="card test-white-card">
              <div className="test-header-row">
                <span className="client-avatar">PR</span>
                <div>
                  <h4>Priya Rajan</h4>
                  <p className="client-meta">Boutique Founder</p>
                </div>
              </div>
              <div className="rating-stars-small">⭐⭐⭐⭐⭐</div>
              <p className="test-body-text">
                "The neon light layout they created for our boutique reception wall is perfect. Bright, safe voltage, and quick installation."
              </p>
            </div>

            <div className="card test-white-card">
              <div className="test-header-row">
                <span className="client-avatar">VK</span>
                <div>
                  <h4>Dr. Vinoth Kumar</h4>
                  <p className="client-meta">Clinic Administrator</p>
                </div>
              </div>
              <div className="rating-stars-small">⭐⭐⭐⭐⭐</div>
              <p className="test-body-text">
                "We requested emergency glowing direction signboards for our medical facility. The acrylic sheets are high grade and durable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-white-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-yellow">FAQ</span>
            <h2>Questions & Answers</h2>
            <p>Detailed replies to common client specifications and warranties.</p>
          </div>

          <div className="faq-accordion-box">
            {faqs.map((faq, index) => (
              <div 
                className={`accordion-item ${openFaq === index ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="accordion-header-btn" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="arrow-icon" size={18} />
                </button>
                <div className="accordion-body-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Contact segment */}
      <section className="contact-white-section section-padding" id="direct-contact-area">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-red">Contact Us</span>
            <h2>Send An Inquiry</h2>
            <p>Schedule a site survey or get detailed estimation pricing drafts.</p>
          </div>

          <div className="contact-white-grid">
            <div className="contact-details-side">
              <h3>Workshop Office</h3>
              <p className="office-sub">Stop by or contact our team for assistance.</p>
              
              <ul className="details-list-bullets">
                <li>
                  <MapPin size={20} className="icon-red" />
                  <span>Naveen Arcade Building, Service Road, Gandhi Nagar, Krishnagiri, Tamil Nadu 635002</span>
                </li>
                <li>
                  <Phone size={18} className="icon-red" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <Mail size={18} className="icon-red" />
                  <a href="mailto:info@royalsigns.in">info@royalsigns.in</a>
                </li>
                <li>
                  <Clock size={18} className="icon-red" />
                  <span>Mon - Sat: 10:00 AM - 7:30 PM (Sun Closed)</span>
                </li>
              </ul>
            </div>

            <div className="card inline-form-card">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your quote request has been sent successfully.");
                }} 
                className="form-inline-elements"
              >
                <div className="form-group">
                  <label htmlFor="home-contact-name">Name *</label>
                  <input type="text" id="home-contact-name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="home-contact-phone">Phone Number *</label>
                  <input type="tel" id="home-contact-phone" placeholder="Enter phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="home-contact-service">Signage Required</label>
                  <select id="home-contact-service">
                    <option value="LED Sign Board">LED Sign Boards</option>
                    <option value="ACP Board">ACP Sign Boards</option>
                    <option value="Acrylic Board">Acrylic Sign Boards</option>
                    <option value="Neon Signs">Neon Sign Boards</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="home-contact-desc">Message Details</label>
                  <textarea id="home-contact-desc" placeholder="Size, mounting, lights specifications..." rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-red w-full">
                  Submit Estimate Request
                </button>
              </form>
            </div>
          </div>

          <div className="map-iframe-white-wrap">
            <iframe 
              title="Royal Signs Location Iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.9678122678857!2d78.2173489!3d12.518625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16e911252033%3A0xe54fb0ce0cecb52b!2sNaveen%20Arcade%2C%20Gandhi%20Nagar%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{ border: 0, display: 'block', borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
