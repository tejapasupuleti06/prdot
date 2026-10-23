import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Volume2 } from "lucide-react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn } from "../../../lib/utils";

/**
 * Skiper49 - 3D Inverted Perspective Coverflow Carousel for PR Men Dot Salon Artisan Barber Tools
 * Based on @skiper-ui/skiper49 (Carousel_003)
 */
export default function Skiper49Cards({
  tools = [],
  activeIndex = 0,
  onIndexChange,
  onLaunchModal,
  renderToolSvg,
  className
}) {
  const swiperRef = useRef(null);

  // Sync external activeIndex (e.g. from top station pills) to swiper
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("skiper49-stage relative w-full flex flex-col items-center", className)}
    >
      {/* Coverflow 3D Cards Swiper Container */}
      <div className="skiper49-cards-wrap relative w-full flex items-center justify-center">
        {/* Navigation Arrow Left */}
        <button
          type="button"
          className="skiper-nav-btn skiper-prev-btn"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous card"
          title="Previous station"
        >
          <ChevronLeft size={22} />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          speed={450}
          observer={true}
          observeParents={true}
          coverflowEffect={{
            rotate: 28,
            stretch: 0,
            depth: 110,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onSlideChange={(swiper) => {
            if (onIndexChange) onIndexChange(swiper.activeIndex);
          }}
          className="skiper49-swiper coverflow-slide-swiper"
        >
          {tools.map((tool, idx) => {
            const isCurrent = activeIndex === idx;

            return (
              <SwiperSlide key={tool.id} className="skiper49-card-slide">
                <div
                  className={cn(
                    "skiper-tool-card",
                    "skiper49-card",
                    isCurrent && "is-active-card"
                  )}
                  onClick={() => onLaunchModal && onLaunchModal(tool.id)}
                  title={`Click to open ${tool.name} interactive sensory lab`}
                >
                  {/* Top Status Row */}
                  <div className="tool-card-top">
                    <span className="tool-tag">{tool.tag}</span>
                    <span className="tool-badge-pill">{tool.badge}</span>
                  </div>

                  {/* 3D Tool Icon Display */}
                  <div className="tool-icon-stage">
                    <div className="tool-icon-circle">
                      {renderToolSvg ? renderToolSvg(tool.iconType) : null}
                    </div>
                  </div>

                  {/* Tool Identity & Sensation */}
                  <h4 className="tool-name">{tool.name}</h4>
                  <div className="tool-sensation-bar">
                    <span className="sensation-dot" />
                    <span className="sensation-text">{tool.sensation}</span>
                  </div>

                  {/* Punchy Description */}
                  <p className="tool-desc">{tool.desc}</p>

                  {/* Craft Spec Pill */}
                  <div className="tool-craft-spec">
                    <CheckCircle2 size={13} className="gold-icon flex-shrink-0" />
                    <span>{tool.craftDetail}</span>
                  </div>

                  {/* Sound & Sensory Action Row */}
                  <div className="skiper-card-action-bar">
                    <div className="skiper-sound-preview">
                      <Volume2 size={12} className="gold-icon" />
                      <span>{tool.soundEffect}</span>
                    </div>

                    
                  </div>

                  {/* 3D Perspective Cue at bottom */}
                  
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          className="skiper-nav-btn skiper-next-btn"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next card"
          title="Next station"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      
    </motion.div>
  );
}
