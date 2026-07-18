import React from 'react';
import { Compass, Eye, ShieldCheck, Hammer, Sparkles, Layers, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { FlippingCard } from '../components/ui/FlippingCard';
import './About.css';

export default function About() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Survey",
      desc: "Our team conducts a physical site measurement to evaluate spacing, mounting angles, wind forces, and power connections.",
      icon: <Compass size={24} className="icon-yellow" />
    },
    {
      num: "02",
      title: "Computerized Design",
      desc: "We render high-resolution 2D and 3D digital layouts showing how your signboard will look in daytime and illuminated at night.",
      icon: <Sliders size={24} className="icon-red" />
    },
    {
      num: "03",
      title: "CNC & Laser Fabrication",
      desc: "ACP sheets are groove-cut on computerized CNC router machines, and acrylic letters are precision laser-cut for flawless alignments.",
      icon: <Hammer size={24} className="icon-yellow" />
    },
    {
      num: "04",
      title: "LED Illumination Assembly",
      desc: "We embed energy-efficient LED modules with waterproof wiring harnesses inside the channel letters.",
      icon: <Sparkles size={24} className="icon-red" />
    },
    {
      num: "05",
      title: "Installation & Commissioning",
      desc: "Our professional heights-technicians install structural wall brackets, mount the sign, and calibrate the lighting controller safely.",
      icon: <Layers size={24} className="icon-yellow" />
    }
  ];

  return (
    <div className="about-page">
      {/* Subpage Header Banner */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <span className="badge badge-yellow">About Royal Signs</span>
          <h1>Crafting Premium Signage That Elevates Your Brand</h1>
          <p>We specialize in acrylic letters, trim cap letters, LED signages, ACP elevations, glazing works, unipoles, and complete branding solutions for businesses across Chennai and Krishnagiri.</p>
        </div>
      </section>

      {/* History Story Section */}
      <section className="story-section section-padding">
        <div className="container story-grid">
          <div className="story-image-side glass-panel">
            <div className="story-box-badge pulse-glow-element">
              <h3>11+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="story-logo-neon">
              <span className="glow-yellow">ESTD</span>
              <span className="glow-red">2015</span>
            </div>
          </div>

          <div className="story-text">
            <h2>Premium Signage &amp; Branding Solutions with Professional Craftsmanship</h2>
            <p>
              At Royal Signs, we specialize in delivering complete signage and branding solutions with professional craftsmanship and premium quality. Our expertise includes acrylic letters, trim cap letters, LED signages, ACP elevations, glazing works, unipoles, uniform fabrication, and a wide range of custom branding solutions tailored for businesses of all sizes.
            </p>
            <p>
              With 11+ years of industry experience, we have successfully completed <strong>680+ projects</strong>, <strong>4,299+ signages</strong>, <strong>75+ ACP elevation works</strong>, and <strong>34+ interior projects</strong>. From concept and design to fabrication and on-site installation, we provide end-to-end solutions that ensure quality, durability, and outstanding visual appeal.
            </p>
            <p>
              Whether you are looking to enhance your shop, office, showroom, restaurant, hospital, educational institution, or corporate workspace, our team creates signage that strengthens your brand identity and gives your business a premium, professional appearance.
            </p>
            <div className="story-stats-grid">
              <div className="story-stat">
                <span className="stat-number">680+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="story-stat">
                <span className="stat-number">4,299+</span>
                <span className="stat-label">Signages</span>
              </div>
              <div className="story-stat">
                <span className="stat-number">75+</span>
                <span className="stat-label">Elevations</span>
              </div>
              <div className="story-stat">
                <span className="stat-number">34+</span>
                <span className="stat-label">Interiors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="quote-section section-padding">
        <div className="container">
          <div className="about-quote-box glass-panel">
            <div className="quote-mark">&ldquo;</div>
            <blockquote className="about-quote-text">
              Value what you have...<br />
              <em>It's Someone else's Dream...</em>
            </blockquote>
            <div className="quote-divider"></div>
            <p className="quote-sub">This is the spirit that drives every sign we craft — pride, purpose, and passion for your brand.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Core — FlippingCard */}
      <section className="vision-mission-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-yellow">Our Foundation</span>
            <h2>Vision &amp; Mission</h2>
            <p>Hover over each card to discover what drives us every day.</p>
          </div>
          <div className="flip-cards-grid-2">
            {/* Vision Card */}
            <FlippingCard
              width={520}
              height={280}
              frontContent={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '36px 30px', textAlign: 'center' }}>
                  <Eye size={48} style={{ color: 'var(--color-yellow)', marginBottom: '18px' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '10px' }}>Our Vision</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hover to read our vision →</p>
                </div>
              }
              backContent={
                <>
                  <span className="fc-back-tag">VISION</span>
                  <p className="fc-back-desc">
                    To become a trusted name in premium signage and branding by creating striking, durable, and innovative solutions that elevate businesses with lasting visual impact.
                  </p>
                  <button className="fc-back-btn">
                    Learn More <ArrowRight size={14} />
                  </button>
                </>
              }
            />

            {/* Mission Card */}
            <FlippingCard
              width={520}
              height={280}
              frontContent={
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '36px 30px', textAlign: 'center' }}>
                  <ShieldCheck size={48} style={{ color: 'var(--color-red)', marginBottom: '18px' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '10px' }}>Our Mission</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hover to read our mission →</p>
                </div>
              }
              backContent={
                <>
                  <span className="fc-back-tag">MISSION</span>
                  <p className="fc-back-desc">
                    To deliver precision-engineered signage and branding solutions using premium materials, expert craftsmanship, and flawless execution — committed to quality from design to installation.
                  </p>
                  <button className="fc-back-btn">
                    Our Services <ArrowRight size={14} />
                  </button>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Process Flow Timeline */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-red">How We Work</span>
            <h2>Our Seamless <span className="logo-accent">Fabrication Process</span></h2>
            <p>Every name board goes through five rigorous checks from pixel layout to power testing.</p>
          </div>

          <div className="process-timeline">
            {steps.map((step, idx) => (
              <div className="process-card-row" key={idx}>
                <div className="process-number">
                  <span>{step.num}</span>
                </div>
                <div className="process-line-connector">
                  <div className="inner-line"></div>
                </div>
                <div className="card process-content-card">
                  <div className="process-header">
                    {step.icon}
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="commitment-section section-padding">
        <div className="container text-center commitment-box glass-panel">
          <h2>Our Quality Guarantee</h2>
          <p>
            We use heavy-gauge aluminum frames, original 3mm ACP sheets, pure virgin acrylic, and high-lumen waterproof LED modules that do not dim over time.
          </p>
          <div className="grid-3 guarantee-grid">
            <div className="guarantee-item">
              <CheckCircle2 className="icon-yellow" size={24} />
              <span>Original LEDs</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 className="icon-red" size={24} />
              <span>Waterproof Adapters</span>
            </div>
            <div className="guarantee-item">
              <CheckCircle2 className="icon-yellow" size={24} />
              <span>Rust-Free Metal Structure</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
