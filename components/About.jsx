"use client";

import { useState } from 'react';
import ShapeGrid from './ShapeGrid';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="snap-section" id="about" style={{ position: 'relative' }}>
      <div 
        className="bg-holder bg-size" 
        style={{ 
          backgroundImage: 'url(/assets/img/gallery/about-bg.png)', 
          backgroundPosition: 'top center', 
          backgroundSize: 'contain',
          opacity: 0.25
        }} 
      />
      <div className="container-fluid px-sm-4 px-md-5 about-container d-flex align-items-center justify-content-center" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row w-100 justify-content-center mx-0">
          <div className="col-12 px-0">
            <div 
              className="py-4 py-md-5 px-3 px-md-4 px-lg-5 w-100 about-card-wrapper"
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(188, 207, 203, 0.9) 0%, rgba(168, 189, 184, 0.85) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '28px',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 30px 60px rgba(13, 59, 67, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.95)'
              }}
            >
              {/* Background ShapeGrid */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.65 }}>
                <ShapeGrid 
                  speed={0.4} 
                  squareSize={45}
                  direction='diagonal'
                  borderColor='rgba(13, 59, 67, 0.2)'
                  hoverFillColor='rgba(13, 59, 67, 0.3)'
                  shape='hexagon'
                  hoverTrailAmount={6}
                />
              </div>

              {/* Header inside the box */}
              <div className="text-center mb-4 mb-lg-5" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                <h1 className="fw-bold text-primary mb-0 about-title" style={{ letterSpacing: '1px' }}>ABOUT US / हमारे बारे में</h1>
              </div>

              <div className="row align-items-center g-4 g-lg-5" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                {/* Mobile-only header (circular image + details side-by-side) */}
                <div className="col-12 d-md-none">
                  <div className="d-flex align-items-center gap-3 mb-2" style={{ pointerEvents: 'auto' }}>
                    <img 
                      src="/assets/img/client/about-doctor.jpg" 
                      onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = '/assets/img/client/about-doctor.svg';
                      }} 
                      alt="Dr. Saurabh Kumar Shukla" 
                      style={{ 
                        width: '90px', 
                        height: '90px',
                        objectFit: 'cover', 
                        borderRadius: '50%', 
                        boxShadow: '0 8px 20px rgba(13, 59, 67, 0.15)',
                        border: '2.5px solid #0D3B43'
                      }}
                    />
                    <div>
                      <span className="badge text-white mb-1 px-2 py-1 rounded-pill" style={{ fontSize: '9px', letterSpacing: '0.5px', fontWeight: 'bold', backgroundColor: '#47391B' }}>
                        CONSULTANT PHYSICIAN
                      </span>
                      <h3 className="fw-bold mb-0 text-primary" style={{ fontSize: '19px', lineHeight: '1.2' }}>
                        Dr. Saurabh Kumar Shukla
                      </h3>
                      <span className="d-block text-secondary mt-1" style={{ fontSize: '11px', fontWeight: '600' }}>
                        B.H.M.S., P.G.D.Y. | Reg. No. HO38824
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop-only Image Column */}
                <div className="col-md-5 order-md-1 d-none d-md-flex justify-content-center">
                  <img 
                    className="img-fluid about-card-img" 
                    src="/assets/img/client/about-doctor.jpg" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/assets/img/client/about-doctor.svg';
                    }} 
                    alt="Dr. Saurabh Kumar Shukla" 
                    style={{ 
                      width: '100%', 
                      objectFit: 'cover', 
                      borderRadius: '20px', 
                      boxShadow: '0 15px 30px rgba(13, 59, 67, 0.12)',
                      pointerEvents: 'auto'
                    }}
                  />
                </div>
                
                {/* Text Column */}
                <div className="col-md-7 text-start">
                  {/* Desktop-only Name and Badge */}
                  <div className="d-none d-md-block">
                    <span className="badge text-white mb-3 px-3 py-2 rounded-pill" style={{ fontSize: '11px', letterSpacing: '1px', fontWeight: 'bold', backgroundColor: '#47391B', pointerEvents: 'auto' }}>
                      CONSULTANT PHYSICIAN
                    </span>
                    <h2 className="fw-bold mb-3 text-primary about-doc-name" style={{ lineHeight: '1.2' }}>
                      Dr. Saurabh Kumar Shukla
                      <span className="d-block fw-normal text-secondary mt-2 about-doc-credentials" style={{ fontSize: '18px' }}>
                        B.H.M.S., P.G.D.Y. | Reg. No. HO38824
                      </span>
                    </h2>
                    <hr className="w-25 my-3 mx-0" style={{ borderColor: '#47391B', borderTopWidth: '2px', opacity: 0.5 }} />
                  </div>

                  <p className="text-secondary mb-2" style={{ fontSize: '14.5px', lineHeight: '1.6', pointerEvents: 'auto' }}>
                    Dr. Saurabh Kumar Shukla is a practicing homeopath and active social worker, registered under the Homeopathic Medicine Board, Uttar Pradesh (Lucknow). With over a decade of clinical experience, he is dedicated to offering safe, non-invasive, and side-effect-free treatments tailored to each patient's unique constitutional profile.
                  </p>

                  {/* Collapsible Area for Mobile (Visible on desktop by default via d-md-block class) */}
                  <div className="d-md-block" style={{ display: isExpanded ? 'block' : 'none', pointerEvents: 'auto' }}>
                    <p className="text-secondary mb-3" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      Om Homeopathic Clinic specializes in chronic and incurable diseases. In addition to general practice, Dr. Shukla functions as a De-addiction Center (नशा मुक्ति केंद्र) and serves as a Consultant Physician at Punjabi Hospital, helping individuals restore balance and achieve long-term wellness.
                    </p>
                    
                    {/* Highlights Grid */}
                    <div className="pt-2">
                      <h4 className="text-primary fw-bold mb-3" style={{ fontSize: '13.5px', letterSpacing: '0.5px' }}>KEY CLINICAL FOCUS AREAS:</h4>
                      <div className="row g-2">
                        {[
                          'Chronic & Incurable Diseases',
                          'De-addiction (नशा मुक्ति केंद्र)',
                          'Individual Constitutional Therapy',
                          'Holistic, Side-Effect Free Recovery'
                        ].map((focus, idx) => (
                          <div key={idx} className="col-sm-6">
                            <div className="d-flex align-items-center gap-2">
                              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(71, 57, 27, 0.1)', width: '20px', height: '20px', minWidth: '20px' }}>
                                <span style={{ color: '#47391B', fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                              </div>
                              <span className="text-secondary fw-medium" style={{ fontSize: '13px' }}>{focus}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand / Collapse Button (visible on mobile only) */}
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="btn btn-link p-0 mt-3 d-md-none fw-bold"
                    style={{ color: '#0D3B43', fontSize: '13px', textDecoration: 'none', pointerEvents: 'auto', border: 'none', background: 'none' }}
                  >
                    {isExpanded ? 'Show Less / संक्षिप्त जानकारी ↑' : 'Read Biography & Clinical Focus / अधिक जानकारी पढ़ें ↓'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
