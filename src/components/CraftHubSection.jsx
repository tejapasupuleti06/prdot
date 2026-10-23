import React from "react";
import { ArrowRight, Scissors, Crown, Tag } from "lucide-react";

export default function CraftHubSection({ onOpenServices, onOpenPackages }) {
  return (
    <section id="menu-hub" className="craft-hub section dark-section">
      <div className="hub-head">
        <div>
          <h2>
            Two Ways to Groom.
            <br />
            <em>Pick your craft or bundle.</em>
          </h2>
        </div>
        <p>
          Explore individual treatments tailored to precision, or select curated combo packages created for maximum style and savings.
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
            <h3>Individual Services</h3>
            <p>
              Hair cuts, stylish fades, beard trims, vibrant hair colours, facials, hair spas, massages, tattoos, and mani-pedi.
            </p>

            <div className="hub-preview-tags">
              <span>Haircuts</span>
              <span>Beard Shave</span>
              <span>Hair Colour</span>
              <span>Facials</span>
              <span>Hair Spa</span>
              <span>Massages</span>
              <span>Tattoos</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn" type="button">
              EXPLORE SERVICES MENU <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Gateway Card 2: Curated Packages */}
        <div className="hub-card hub-card-packages" onClick={onOpenPackages}>
          <div className="hub-card-bg-glow glow-gold" />
          <div className="hub-card-top">
            <span className="hub-badge badge-gold">
              <Tag size={13} /> POPULAR DEALS
            </span>
            <span className="hub-counter counter-gold">SAVE UP TO 35%</span>
          </div>

          <div className="hub-card-body">
            <div className="hub-big-icon icon-gold">
              <Crown size={42} strokeWidth={1.8} />
            </div>
            <h3>Signature Packages</h3>
            <p>
              Curated grooming combos combining haircut, beard steam, de-tan cleanup, and head massage for a complete upgrade.
            </p>

            <div className="hub-preview-tags tags-gold">
              <span>Executive Combo (₹399)</span>
              <span>Royal De-Tan (₹799)</span>
              <span>Groom Special (₹1,499)</span>
            </div>
          </div>

          <div className="hub-card-footer">
            <button className="hub-trigger-btn btn-gold" type="button">
              EXPLORE PACKAGES & COMBOS <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Tattoo Showcase Banner down below Signature Packages */}
      <div
        className="hub-tattoo-strip"
        onClick={() => {
          const el = document.getElementById("tattoos");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        role="button"
        tabIndex={0}
      >
        <div className="hub-tattoo-left">
          <span className="hub-tattoo-badge">✒️ INK STUDIO</span>
          <div>
            <h4>All Tattoos Are Also Available at PR Men Dot</h4>
            <p>Custom permanent body art, 100% single-use sterile needles, bespoke stencils, and professional aftercare.</p>
          </div>
        </div>
        <button type="button" className="hub-tattoo-btn">
          EXPLORE TATTOOS <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
