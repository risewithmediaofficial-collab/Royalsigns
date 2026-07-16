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
    // Top services from the visiting card
    {
      id: 'acrylic-trimcap-liquid',
      cat: 'boards',
      title: 'Acrylic / Trimcap / Liquid Letters',
      desc: 'Premium illuminated letter options including acrylic faces, trimcap edging, and liquid acrylic fills for high-durability glow.',
      specs: ['Liquid acrylic technology', 'Trimcap side borders', 'Superb nighttime brightness', 'Waterproof wiring'],
      icon: <Sparkles size={36} />,
      bentoClass: "col-span-2 row-span-1"
    },
    {
      id: 'ss-brass-letters',
      cat: 'boards',
      title: 'SS / Brass Letters',
      desc: 'Rust-free luxury stainless steel (SS) and brass metal letters with option for backlit warm-white LED glowing profiles.',
      specs: ['Grade 304 stainless steel', 'Solid polished brass', 'Back-lit halo effect option', 'Highly durable structure'],
      icon: <Star size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'acp-elevations-work',
      cat: 'boards',
      title: 'ACP Elevations',
      desc: 'Full building front cladding panels and elevations built using premium 3mm/4mm weather-resistant ACP sheets.',
      specs: ['Aludecor & Eurobond sheets', 'Heavy-duty steel channel support', 'CNC grooving & panel alignment', 'Anti-fading paint coating'],
      icon: <Grid size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'toughness-glass-work',
      cat: 'boards',
      title: 'Toughness Glass',
      desc: 'Frameless toughened glass storefront entries, display panels, doors, and partitions for office buildings.',
      specs: ['10mm/12mm Toughened glass', 'Heavy patch fittings & hinges', 'Safety structural framing', 'Frosted sticker layout options'],
      icon: <CheckSquare size={36} />,
      bentoClass: "col-span-2 row-span-1"
    },
    {
      id: 'branding-fabrication-work',
      cat: 'branding',
      title: 'Branding Fabrication',
      desc: 'Complete industrial-grade name board structure framing, banner posts, lightboxes, and uniform custom retail signs.',
      specs: ['Computerized layout renderings', 'Rust-proof iron frames', 'Samsung high-power LEDs', 'Quick onsite assembly'],
      icon: <Lightbulb size={36} />,
      bentoClass: "col-span-2 row-span-1"
    },
    {
      id: 'wallpapers-louvers-work',
      cat: 'branding',
      title: 'Wallpapers & Louvers',
      desc: 'Premium custom interior wallpapers and high-finish wooden louvers to redesign corporate offices & home walls.',
      specs: ['High-resolution mural prints', 'WPC wall paneling louvers', 'Seamless adhesive pastes', 'Modern corporate workspace looks'],
      icon: <Printer size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    // Standard Services
    {
      id: 'led-boards',
      cat: 'boards',
      title: 'LED Sign Boards',
      desc: 'Energy-saving illuminated signs built using waterproof Samsung LED modules. Highly visible from a distance, perfect for high-traffic high street shops.',
      specs: ['Samsung LED modules', 'IP67 Waterproofing', '2-Year Warranty', 'Custom controller setups'],
      icon: <Lightbulb size={36} />,
      bentoClass: "col-span-2 row-span-1"
    },
    {
      id: 'acp-boards',
      cat: 'boards',
      title: 'ACP Sign Boards',
      desc: 'Aluminum Composite Panel (ACP) backplates grooved and fitted with raised acrylic 3D lettering. Creates a highly professional matte or glossy exterior shop front.',
      specs: ['3mm Premium ACP sheets', 'Aludecor / Eurobond brand sheets', 'CNC router grooving', 'Anti-rust internal metal frame'],
      icon: <Grid size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'acrylic-letters',
      cat: 'boards',
      title: 'Acrylic 3D Letters',
      desc: 'Three-dimensional letters cut out of virgin acrylic sheets and bent using hot strip heaters. Includes internal LED lighting options or solid unlit letters.',
      specs: ['Imported gloss acrylics', 'Laser-cut accuracy', 'Uniform light diffusion', 'Vibrant color ranges'],
      icon: <CheckSquare size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'neon-signs',
      cat: 'boards',
      title: 'Neon Sign Boards',
      desc: 'Custom flexible silicone LED neon tubes fitted on clear acrylic plates. Highly trendy for restaurant interiors, cafes, bars, and office wall graphics.',
      specs: ['12V low voltage safety', 'High-density silicone neon', 'Custom script font designs', 'Adapter and wall screws included'],
      icon: <Sparkles size={36} />,
      bentoClass: "col-span-2 row-span-1"
    },
    {
      id: 'flex-vinyl',
      cat: 'printing',
      title: 'Flex & Vinyl Printing',
      desc: 'High-speed solvent and eco-solvent printing on heavy flex canvases, star flex material, and glossy adhesive vinyl sheets for cost-effective marketing.',
      specs: ['Eco-solvent non-fade inks', 'Star flex canvas material', 'Vibrant color depth', 'Glossy & matte laminations'],
      icon: <Printer size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'glass-stickers',
      cat: 'branding',
      title: 'One-Way Vision & Frosted Glass Stickers',
      desc: 'Frosted films and micro-perforated vinyl stickers for office glass doors, partition walls, and showroom fronts to control sunlight and maintain privacy.',
      specs: ['3M frosted privacy films', 'One-way vision mesh stickers', 'Sun control UV block films', 'Custom plotter-cut vector logos'],
      icon: <ShieldAlert size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'vehicle-branding',
      cat: 'branding',
      title: 'Vehicle & Shop Branding',
      desc: 'Full and partial vinyl wrap stickers for delivery trucks, vans, autos, and storefronts, turning your logistics vehicles into mobile billboards.',
      specs: ['Cast wrapping vinyl sheets', 'Bubble-free adhesive film', 'Varnish coat lamination', 'Onsite vehicle application'],
      icon: <Truck size={36} />,
      bentoClass: "col-span-1 row-span-1"
    },
    {
      id: 'install-repair',
      cat: 'install',
      title: 'Installation & Repair Services',
      desc: 'Maintenance, bulb replacements, power adapter changes, ACP replacement, and relocation of older signboards by certified installers.',
      specs: ['Secure structural anchor bolts', 'Certified power calibration', 'Emergency LED bulb replacements', 'Relocation & re-wiring'],
      icon: <Star size={36} />,
      bentoClass: "col-span-3 row-span-1"
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
              <p>Absolutely. We use outdoor-grade IP67 waterproof Samsung LED modules, weather-sealed power adapters, and anti-corrosive metal framing. All joints are sealed with silicone sealant to prevent rain seepage.</p>
            </div>

            <div className="card faq-card">
              <h3>Is there any warranty on illuminated boards?</h3>
              <p>Yes, we provide 1 to 2 years replacement warranty on LED modules and power adapters/transformers depending on the material configuration chosen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
