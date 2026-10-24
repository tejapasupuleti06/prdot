import React from "react";
import { ArrowRight, Scissors, ShieldCheck } from "lucide-react";

export default function CraftHubSection({ onOpenServices, onScrollTo }) {
  const handleInkStudioClick = () => {
    if (onScrollTo) {
      onScrollTo("tattoos");
    } else {
      const el = document.getElementById("tattoos");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu-hub" className="craft-hub section dark-section">
      <div className="hub-head">
        <div>
          <h2>
            Two Signature Studios.
            <br />
            <em>Master Grooming & Bespoke Ink.</em>
          </h2>
        </div>
        <p>
          Explore 41 precision salon & beauty treatments tailored to your style, or step into PR Ink Studio for bespoke permanent body art and piercing.
        </p>
      </div>

      <div className="hub-cards-grid">
        {/* Gateway Card 1: Services Catalog */}
        <div className="hub-card hub-card-services" onClick={onOpenServices}>
          <div className="hub-card-bg-glow" />
          <div className="hub-card-top">
            <span className="hub-badge">
              <Scissors size={13} /> 8 SERVICE CATEGORIES
            </span>
            <span className="hub-counter">FROM ₹60</span>
          </div>

          <div className="hub-card-body">
            <div className="hub-big-icon">✂</div>
            <h3>Saloon & Beauty</h3>
            <p>
              Hair cuts, stylish fades, beard trims, vibrant hair colours, de-tan facials, hair spas, soothing massages, and mani-pedi.
            </p>

            <div className="hub-preview-tags">
              <span>Haircuts</span>
              <span>Beard Shave</span>
              <span>Hair Colour</span>
              <span>Facials</span>
              <span>Hair Spa</span>
              <span>Massages</span>
              <span>Mani-Pedi</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn" type="button">
              EXPLORE SERVICES MENU <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Gateway Card 2: PR Ink Studio (Custom Tattoos & Piercing) */}
        <div className="hub-card hub-card-packages hub-card-ink" onClick={handleInkStudioClick}>
          <div className="hub-card-bg-glow glow-gold" />
          <div className="hub-card-top">
            <span className="hub-badge badge-gold">
              <span className="tattoo-icon">✒️</span> PR INK STUDIO
            </span>
            <span className="hub-counter counter-gold">
              <ShieldCheck size={12} className="inline mr-1" /> 100% STERILE NEEDLES
            </span>
          </div>

          <div className="hub-card-body">
            <div className="hub-big-icon icon-gold">✒️</div>
            <h3>PR Ink Studio</h3>
            <p>
              Custom permanent tattoos, minimalist line work, portraits, bespoke stencils, single-use sterile needles, plus gunshot piercing (₹150).
            </p>

            <div className="hub-preview-tags tags-gold">
              <span>Custom Tattoos</span>
              <span>Minimalist Line Art</span>
              <span>Religious & Names</span>
              <span>Gunshot (₹150)</span>
              <span>Sterile Needles</span>
              <span>Safe Aftercare</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn btn-gold" type="button">
              EXPLORE INK STUDIO & TATTOOS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
