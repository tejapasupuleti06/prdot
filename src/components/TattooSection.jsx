import React from "react";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { siteData } from "../data/salonData";

export default function TattooSection({ onOpenBooking }) {
  const handleWhatsAppTattoo = () => {
    const text = encodeURIComponent(
      "Hi PR Men Dot, I would like to inquire about getting a tattoo. I have a design reference."
    );
    window.open(`${siteData.whatsappLink}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="tattoos" className="tattoo-section section dark-section">
      <div className="tattoo-container">
        {/* Top Kicker */}
        <div className="tattoo-badge-row">
          <span className="tattoo-pill">
            <span className="tattoo-icon">✒️</span> PR INK STUDIO
          </span>
          <span className="tattoo-sterile-pill">
            <ShieldCheck size={13} /> 100% STERILE & SAFE
          </span>
        </div>

        {/* Short & Punchy Header */}
        <div className="tattoo-header-short">
          <h2 className="tattoo-title">
            Custom Tattoos Available.
            <br />
            <em className="text-gold-rich">Permanent ink crafted by skilled artists.</em>
          </h2>
          <p className="tattoo-desc-short">
            From minimalist line art, names & dates to spiritual motifs and custom sleeves — done with 100% single-use sterile needles, imported inks, and complete healing aftercare.
          </p>
        </div>

        {/* 4 Quick Highlights */}
        <div className="tattoo-quick-chips">
          <div className="tattoo-chip">
            <CheckCircle2 size={14} className="gold-icon" />
            <span>100% Sterile Needles</span>
          </div>
          <div className="tattoo-chip">
            <CheckCircle2 size={14} className="gold-icon" />
            <span>Custom Stencils & Names</span>
          </div>
          <div className="tattoo-chip">
            <CheckCircle2 size={14} className="gold-icon" />
            <span>Skin-Safe Imported Inks</span>
          </div>
          <div className="tattoo-chip">
            <CheckCircle2 size={14} className="gold-icon" />
            <span>Full Healing Aftercare</span>
          </div>
        </div>

        {/* Fast Action Buttons */}
        <div className="tattoo-short-actions">
          <button
            type="button"
            className="primary gold-button"
            onClick={handleWhatsAppTattoo}
          >
            <MessageCircle size={16} />
            <span>SEND DESIGN ON WHATSAPP</span>
          </button>
          {onOpenBooking && (
            <button
              type="button"
              className="ghost ghost-light"
              onClick={() => onOpenBooking("All Tattoos Available (Custom Ink)")}
            >
              <span>BOOK CONSULTATION</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
