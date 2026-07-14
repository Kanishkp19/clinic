"use client";

import ShapeGrid from './ShapeGrid';

export default function About() {
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
              className="py-5 px-4 px-lg-5 w-100 about-card-wrapper"
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
                {/* Image Column - Right on desktop, top on mobile */}
                <div className="col-md-5 order-md-1 d-flex justify-content-center">
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
                
                {/* Text Column - Left on desktop */}
                <div className="col-md-7 text-center text-md-start">
                  <span className="badge text-white mb-3 px-3 py-2 rounded-pill" style={{ fontSize: '11px', letterSpacing: '1px', fontWeight: 'bold', backgroundColor: '#47391B', pointerEvents: 'auto' }}>
                    CONSULTANT PHYSICIAN
                  </span>
                  <h2 className="fw-bold mb-3 text-primary about-doc-name" style={{ lineHeight: '1.2' }}>
                    Dr. Saurabh Kumar Shukla
                    <span className="d-block fw-normal text-secondary mt-2 about-doc-credentials" style={{ fontSize: '18px' }}>
                      B.H.M.S., P.G.D.Y. | Reg. No. HO38824
                    </span>
                  </h2>
                  <hr className="w-25 my-3 mx-auto mx-md-0" style={{ borderColor: '#47391B', borderTopWidth: '2px', opacity: 0.5 }} />
                  <p className="text-secondary mb-3" style={{ fontSize: '15.5px', lineHeight: '1.65' }}>
                    Dr. Saurabh Kumar Shukla is a practicing homeopath and active social worker, registered under the Homeopathic Medicine Board, Uttar Pradesh (Lucknow). With over a decade of clinical experience, he is dedicated to offering safe, non-invasive, and side-effect-free treatments tailored to each patient's unique constitutional profile.
                  </p>
                  <p className="text-secondary mb-4" style={{ fontSize: '15.5px', lineHeight: '1.65' }}>
                    Om Homeopathic Clinic specializes in chronic and incurable diseases. In addition to general practice, Dr. Shukla functions as a De-addiction Center (नशा मुक्ति केंद्र) and serves as a Consultant Physician at Punjabi Hospital, helping individuals restore balance and achieve long-term wellness.
                  </p>
                  
                  {/* Highlights Grid */}
                  <div className="pt-2">
                    <h4 className="text-primary fw-bold mb-3" style={{ fontSize: '15px', letterSpacing: '0.5px' }}>KEY CLINICAL FOCUS AREAS:</h4>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(71, 57, 27, 0.1)', width: '22px', height: '22px', minWidth: '22px' }}>
                            <span style={{ color: '#47391B', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                          </div>
                          <span className="text-secondary fw-medium" style={{ fontSize: '13.5px' }}>Chronic & Incurable Diseases</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(71, 57, 27, 0.1)', width: '22px', height: '22px', minWidth: '22px' }}>
                            <span style={{ color: '#47391B', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                          </div>
                          <span className="text-secondary fw-medium" style={{ fontSize: '13.5px' }}>De-addiction (नशा मुक्ति केंद्र)</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(71, 57, 27, 0.1)', width: '22px', height: '22px', minWidth: '22px' }}>
                            <span style={{ color: '#47391B', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                          </div>
                          <span className="text-secondary fw-medium" style={{ fontSize: '13.5px' }}>Individual Constitutional Therapy</span>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(71, 57, 27, 0.1)', width: '22px', height: '22px', minWidth: '22px' }}>
                            <span style={{ color: '#47391B', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
                          </div>
                          <span className="text-secondary fw-medium" style={{ fontSize: '13.5px' }}>Holistic, Side-Effect Free Recovery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
