import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Grid, CheckSquare, Sparkles, Printer, ShieldAlert, Truck, Star } from 'lucide-react';
import { BentoGrid, BentoCard } from '../components/ui/bento-grid';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'boards', name: 'Illuminated & 3D Boards' },
    { id: 'printing', name: 'Flex & Prints' },
    { id: 'branding', name: 'Office & Vehicle Branding' },
    { id: 'install', name: 'Installation & Repair' }
  ];

  const servicesList = [
    {
      id: 'acrylic-trimcap-liquid',
      cat: 'boards',
      title: 'Acrylic / Trimcap / Liquid Letters',
      desc: 'Premium illuminated letter options including acrylic faces, trimcap edging, and liquid acrylic fills for high-durability glow.',
      specs: ['Liquid acrylic technology', 'Trimcap side borders', 'Superb nighttime brightness', 'Waterproof wiring'],
      icon: <Sparkles size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'ss-brass-letters',
      cat: 'boards',
      title: 'SS / Brass / Metal Letters',
      desc: 'Rust-free luxury stainless steel (SS), brass, and aluminum metal letters with option for backlit warm-white LED glowing profiles.',
      specs: ['Grade 304 stainless steel', 'Solid polished brass & metals', 'Back-lit halo effect option', 'Highly durable structure'],
      icon: <Star size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'acp-elevations-work',
      cat: 'boards',
      title: 'ACP Elevations',
      desc: 'Full building front cladding panels and elevations built using premium 3mm/4mm weather-resistant ACP sheets.',
      specs: ['Aludecor & Eurobond sheets', 'Heavy-duty steel channel support', 'CNC grooving & panel alignment', 'Anti-fading paint coating'],
      icon: <Grid size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'toughness-glass-work',
      cat: 'boards',
      title: 'Toughness Glass',
      desc: 'Frameless toughened glass storefront entries, display panels, doors, and partitions for office buildings.',
      specs: ['10mm/12mm Toughened glass', 'Heavy patch fittings & hinges', 'Safety structural framing', 'Frosted sticker layout options'],
      icon: <CheckSquare size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'branding-fabrication-work',
      cat: 'branding',
      title: 'Branding Fabrication',
      desc: 'Complete industrial-grade name board structure framing, banner posts, lightboxes, and uniform custom retail signs.',
      specs: ['Computerized layout renderings', 'Rust-proof iron frames', 'high-power LEDs', 'Quick onsite assembly'],
      icon: <Lightbulb size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'wallpapers-louvers-work',
      cat: 'branding',
      title: 'Wallpapers & Louvers',
      desc: 'Premium custom interior wallpapers and high-finish wooden louvers to redesign corporate offices & home walls.',
      specs: ['High-resolution mural prints', 'WPC wall paneling louvers', 'Seamless adhesive pastes', 'Modern corporate workspace looks'],
      icon: <Printer size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'led-boards',
      cat: 'boards',
      title: 'LED Sign Boards',
      desc: 'Energy-saving illuminated signs built using waterproof LED modules, perfect for high-traffic shops.',
      specs: ['LED modules', 'IP67 Waterproofing', '1.5-Year Warranty (depends on LED model)', 'Custom controller setups'],
      icon: <Lightbulb size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'neon-signs',
      cat: 'boards',
      title: 'Neon Sign Boards',
      desc: 'Custom flexible silicone LED neon tubes on acrylic plates. Trendy for restaurants, cafes, and office walls.',
      specs: ['12V low voltage safety', 'High-density silicone neon', 'Custom script font designs', 'Adapter and wall screws included'],
      icon: <Sparkles size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'flex-vinyl',
      cat: 'printing',
      title: 'Flex & Vinyl Printing',
      desc: 'High-speed solvent printing on heavy flex canvases and adhesive vinyl for cost-effective outdoor marketing.',
      specs: ['Eco-solvent non-fade inks', 'Star flex canvas material', 'Vibrant color depth', 'Glossy & matte laminations'],
      icon: <Printer size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'glass-stickers',
      cat: 'branding',
      title: 'Glass Films & Stickers',
      desc: 'Frosted films and one-way vision stickers for office glass doors, partition walls, and showroom fronts.',
      specs: ['3M frosted privacy films', 'One-way vision mesh stickers', 'Sun control UV block films', 'Custom plotter-cut vector logos'],
      icon: <ShieldAlert size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'vehicle-branding',
      cat: 'branding',
      title: 'Vehicle & Shop Branding',
      desc: 'Full and partial vinyl wraps for delivery trucks, vans, autos, and storefronts — mobile billboards for your brand.',
      specs: ['Cast wrapping vinyl sheets', 'Bubble-free adhesive film', 'Varnish coat lamination', 'Onsite vehicle application'],
      icon: <Truck size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'install-repair',
      cat: 'install',
      title: 'Installation & Repair',
      desc: 'Maintenance, LED replacements, adapter changes, ACP panel replacement, and signboard relocation by certified installers.',
      specs: ['Secure structural anchor bolts', 'Certified power calibration', 'Emergency LED bulb replacements', 'Relocation & re-wiring'],
      icon: <Star size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'unipoles',
      cat: 'boards',
      title: 'Unipoles',
      desc: 'Heavy-duty outdoor unipole advertising billboards designed to withstand extreme weather and deliver maximum visibility.',
      specs: ['Reinforced steel structures', 'Double-sided display panels', 'High-altitude visibility', 'Wind-load certified fabrication'],
      icon: <Grid size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'led-video-walls',
      cat: 'boards',
      title: 'LED Video Walls & Scrolling Boards',
      desc: 'Premium indoor and outdoor dynamic LED video walls, display screens, and programmable multi-color scrolling message boards.',
      specs: ['Ultra-bright SMD panels', 'Synchronized video playback', 'Programmable text scrolling', 'WiFi/App controlled interfaces'],
      icon: <Sparkles size={28} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'concept-signages',
      cat: 'boards',
      title: 'Concept Signages',
      desc: 'Custom-made creative and conceptual signboards tailormade to capture unique brand identities through custom engineering and premium materials.',
      specs: ['Bespoke designer mockups', 'Architectural materials combo', 'Unique spatial installations', 'Custom dynamic illumination'],
      icon: <Lightbulb size={28} />,
      bentoClass: "col-span-1 row-span-1"
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.cat === activeCategory);

  const triggerQuoteForService = (serviceName) => {
    const event = new CustomEvent('toggle-quote-modal', { detail: { open: true } });
    window.dispatchEvent(event);

    setTimeout(() => {
      const selectElement = document.getElementById('modal-service');
      if (selectElement) {
        selectElement.value = serviceName;
        const ev = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(ev);
      }
    }, 100);
  };

  return (
    <div className="services-page">
      {/* Header Banner */}
      <section className="page-header section-padding text-center">
        <div className="container">
          <span className="badge badge-red">Comprehensive Branding</span>
          <h1>Our Signage Services</h1>
          <p>End-to-end design, fabrication, and installation of premium signage solutions.</p>
        </div>
      </section>



      {/* Branch & Factory Info Strip */}
      <section className="branch-info-strip">
        <div className="container branch-info-grid">
          <div className="branch-info-item">
            <span className="branch-label">OFFICE</span>
            <p>No: 13, 6, Tamilar St, Loganathan Nagar, Padmanabha Nagar, Choolaimedu, Chennai – 600094</p>
          </div>
          <div className="branch-divider" />
          <div className="branch-info-item">
            <span className="branch-label">BRANCH (KRISHNAGIRI)</span>
            <p>#3/243, Naveen Arcade, CSB Bank Basement, Salem Highway Service Road, KRISHNAGIRI – 635002</p>
          </div>
          <div className="branch-divider" />
          <div className="branch-info-item">
            <span className="branch-label">BRANCH (BENGALURU)</span>
            <p>DR G Nagar, 1st Main Rd, 2nd Stage, Rajagopala Nagar, Peenya, Bengaluru, Karnataka 560091</p>
          </div>
          <div className="branch-divider" />
          <div className="branch-info-item">
            <span className="branch-label">FACTORY</span>
            <p>#31, Thayar Sahib Street, 1st Lane, Ellis Road, Chennai – 600002</p>
          </div>
        </div>
      </section>

      {/* Services Tabs Selector */}
      <section className="services-main section-padding">
        <div className="container">
          <div className="tabs-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <BentoGrid className="services-bento-grid">
            {filteredServices.map((service) => (
              <BentoCard
                key={service.id}
                name={service.title}
                className={service.bentoClass}
                Icon={service.icon}
                description={service.desc}
                cta={`Inquire for ${service.title}`}
                onClickButton={() => triggerQuoteForService(service.title)}
                background={null}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-yellow">FAQ</span>
            <h2>Frequently Asked <span className="logo-accent">Questions</span></h2>
            <p>Find answers to common questions about materials, lighting, warranties, and production time.</p>
          </div>

          <div className="faq-grid grid-2">
            <div className="card faq-card">
              <h3>What is the typical production timeline?</h3>
              <p>For standard ACP and Acrylic name boards, fabrication takes 5 to 7 working days after design layout approval. Complex double-sided illuminated pylon displays can take up to 10 days.</p>
            </div>

            <div className="card faq-card">
              <h3>Do you provide design assistance?</h3>
              <p>Yes! We have an in-house design team that creates 2D and 3D computer renderings. Once you confirm the order, design mockups are created free of cost.</p>
            </div>

            <div className="card faq-card">
              <h3>Are the LED signboards weather-resistant?</h3>
              <p>Absolutely. We use outdoor-grade IP67 waterproof LED modules, weather-sealed power adapters, and anti-corrosive metal framing. All joints are sealed with silicone sealant to prevent rain seepage.</p>
            </div>

            <div className="card faq-card">
              <h3>Is there any warranty on illuminated boards?</h3>
              <p>Yes, we provide a 1.5-year replacement warranty on LED modules (depending on the LED model) and power adapters/transformers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
