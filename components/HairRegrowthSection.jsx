"use client";

import { useState, useRef } from 'react';

function InteractiveSweeper() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  return (
    <div 
      ref={containerRef}
      className="position-relative overflow-hidden rounded-4 w-100 hair-sweeper-container"
      style={{ 
        aspectRatio: '1', 
        userSelect: 'none',
        cursor: 'ew-resize',
        border: '1.5px solid rgba(13, 59, 67, 0.15)',
        boxShadow: '0 20px 40px rgba(13, 59, 67, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.95)',
        background: '#ffffff'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* After Image Container (Base) */}
      <div className="w-100 h-100 position-absolute top-0 start-0">
        <img 
          src="/after-hair-cropped.jpeg" 
          alt="After Regrowth" 
          className="w-100 h-100"
          style={{ objectFit: 'cover', pointerEvents: 'none' }}
        />
        <div 
          className="position-absolute text-white px-3 py-1 rounded-pill"
          style={{ 
            bottom: '20px', 
            right: '20px', 
            fontSize: '11px', 
            fontWeight: '700',
            zIndex: 10, 
            background: 'rgba(13, 59, 67, 0.8)', 
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          After / बाद में
        </div>
      </div>

      {/* Before Image Container (Overlay clipped from right) */}
      <div 
        className="w-100 h-100 position-absolute top-0 start-0 before-container"
        style={{ 
          clipPath: isHovered ? `inset(0 ${100 - sliderPosition}% 0 0)` : undefined,
          zIndex: 5
        }}
      >
        <img 
          src="/before-hair-cropped.jpeg" 
          alt="Before Treatment" 
          className="w-100 h-100"
          style={{ 
            objectFit: 'cover', 
            pointerEvents: 'none'
          }}
        />
        <div 
          className="position-absolute text-white px-3 py-1 rounded-pill"
          style={{ 
            bottom: '20px', 
            left: '20px', 
            fontSize: '11px', 
            fontWeight: '700',
            zIndex: 10, 
            background: 'rgba(71, 57, 27, 0.85)', 
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          Before / पहले
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div 
        className="position-absolute top-0 bottom-0 sweep-bar"
        style={{ 
          left: isHovered ? `${sliderPosition}%` : undefined, 
          width: '2px', 
          backgroundColor: '#ffffff',
          boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(13, 59, 67, 0.5)',
          zIndex: 20,
          pointerEvents: 'none'
        }}
      >
        {/* Glow Line Indicator */}
        <div 
          className="position-absolute top-0 bottom-0"
          style={{
            left: '-1px',
            width: '4px',
            background: 'linear-gradient(180deg, transparent 0%, #ffffff 50%, transparent 100%)',
            opacity: 0.8
          }}
        />
      </div>

      {/* CSS Styles for automated animation */}
      <style jsx global>{`
        .hair-sweeper-container:not(:hover) .before-container {
          animation: auto-sweep 8s ease-in-out infinite;
        }
        .hair-sweeper-container:not(:hover) .sweep-bar {
          animation: auto-sweep-line 8s ease-in-out infinite;
        }

        @keyframes auto-sweep {
          0%, 100% {
            clip-path: inset(0 100% 0 0);
          }
          50% {
            clip-path: inset(0 0% 0 0);
          }
        }

        @keyframes auto-sweep-line {
          0%, 100% {
            left: 0%;
          }
          50% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function HairRegrowthSection() {
  return (
    <section className="snap-section" id="hair-regrowth" style={{ position: 'relative', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          {/* Left Side: Before/After Slider */}
          <div className="col-lg-5 col-md-8 d-flex justify-content-center">
            <div style={{ maxWidth: '480px', width: '100%' }}>
              <InteractiveSweeper />
            </div>
          </div>

          {/* Right Side: Case Study Details */}
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <span 
                className="badge px-3 py-2 mb-3 rounded-pill" 
                style={{ 
                  color: '#47391B', 
                  border: '1px solid rgba(71, 57, 27, 0.25)', 
                  fontSize: '11px', 
                  fontWeight: '700',
                  background: 'rgba(71, 57, 27, 0.08)'
                }}
              >
                MOST SUCCESSFUL CASE STUDY / सफल परिणाम
              </span>
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.3rem', color: '#0D3B43', fontFamily: 'sans-serif', lineHeight: '1.2' }}>
                From Advanced Baldness to Natural Hair Growth
                <span className="d-block mt-2" style={{ fontSize: '1.6rem', color: '#47391B', fontWeight: '500' }}>
                  गंजेपन से घने बालों तक का सफर
                </span>
              </h2>
              <p className="fs-1 text-secondary mb-4" style={{ color: '#555555' }}>
                A landmark clinical success story showing complete hair restoration using constitutional homeopathic therapy.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.65)', border: '1px solid rgba(13, 59, 67, 0.1)', backdropFilter: 'blur(8px)' }}>
                    <h6 className="fw-bold mb-1" style={{ color: '#0D3B43' }}>Duration / उपचार समय</h6>
                    <p className="mb-0 text-secondary" style={{ fontSize: '14px' }}>6 Months of Therapy / 6 महीने</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.65)', border: '1px solid rgba(13, 59, 67, 0.1)', backdropFilter: 'blur(8px)' }}>
                    <h6 className="fw-bold mb-1" style={{ color: '#0D3B43' }}>Methodology / उपचार विधि</h6>
                    <p className="mb-0 text-secondary" style={{ fontSize: '14px' }}>Constitutional Homeopathy / संवैधानिक चिकित्सा</p>
                  </div>
                </div>
              </div>

              <p className="text-secondary mb-4" style={{ lineHeight: '1.6', color: '#47391B' }}>
                The patient presented with male pattern baldness (androgenetic alopecia) showing significant scalp exposure. After a comprehensive constitutional diagnostic analysis assessing stress factors, nutritional profile, and genetics, a personalized homeopathic remedy plan was initiated. By restoring scalp micro-circulation and nourishing dormant follicles naturally, a full recovery of hair density was achieved without the use of minoxidil, finasteride, or surgical transplants.
              </p>

              <div>
                <h6 className="fw-bold mb-3" style={{ color: '#0D3B43' }}>Key Treatment Milestones / मुख्य विशेषताएं:</h6>
                <ul className="list-unstyled" style={{ color: '#47391B', paddingLeft: '0' }}>
                  <li className="mb-2 d-flex align-items-start">
                    <svg className="me-2 text-success mt-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span><strong>100% Side-effect Free:</strong> Relied entirely on natural remedies with zero dependence on life-long synthetic serums.</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <svg className="me-2 text-success mt-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span><strong>Follicular Revival:</strong> Activated dormant hair roots at a cellular level, restoring thickness and vitality.</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <svg className="me-2 text-success mt-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span><strong>Healthy Scalp:</strong> Resolved underlying micro-inflammation, creating a sustainable environment for long-term growth.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
