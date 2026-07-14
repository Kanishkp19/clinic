"use client";

import ShapeGrid from './ShapeGrid';

export default function OurDoctors() {
  return (
    <section className="snap-section" id="doctors">
      <div className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" style={{ position: 'relative' }}>
              <div 
                className="bg-holder bg-size" 
                style={{ 
                  backgroundImage: 'url(/assets/img/gallery/doctors-us.png)', 
                  backgroundPosition: 'top center', 
                  backgroundSize: 'contain' 
                }} 
              />
              <h1 className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                CLINIC PHYSICIAN / चिकित्सक
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 py-lg-4" style={{ position: 'relative' }}>
        <div 
          className="bg-holder bg-size" 
          style={{ 
            backgroundImage: 'url(/assets/img/gallery/doctors-bg.png)', 
            backgroundPosition: 'top center', 
            backgroundSize: 'contain' 
          }} 
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div 
                className="card card-span border-0 p-sm-5 p-4" 
                style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(188, 207, 203, 0.9) 0%, rgba(168, 189, 184, 0.85) 100%)',
                  borderRadius: '28px',
                  boxShadow: '0 30px 60px rgba(13, 59, 67, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.4)',
                  border: '1px solid rgba(13, 59, 67, 0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)'
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
                <div className="card-body d-flex flex-column align-items-center text-center" style={{ position: 'relative', zIndex: 1 }}>
                  <img 
                    className="rounded-circle mb-4" 
                    src="/assets/img/client/doctor-profile.jpg" 
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/assets/img/client/doctor-profile.svg';
                    }} 
                    width="260" 
                    height="260" 
                    alt="Dr. Saurabh Kumar Shukla" 
                    style={{ 
                      objectFit: 'cover',
                      border: '5px solid #47391B',
                      boxShadow: '0 12px 30px rgba(13, 59, 67, 0.18)'
                    }} 
                  />
                  <h3 className="fw-bold mb-1" style={{ color: '#0D3B43', fontSize: '28px' }}>Dr. Saurabh Kumar Shukla</h3>
                  <p className="fs-1 fw-bold mb-2" style={{ color: '#47391B' }}>B.H.M.S., P.G.D.Y.</p>
                  <p className="mb-3" style={{ color: '#0D3B43', opacity: 0.85, fontWeight: '600', fontSize: '14px' }}>Reg. No. HO38824 (UP)</p>
                  <hr className="w-25 my-3 mx-auto" style={{ borderColor: 'rgba(13, 59, 67, 0.15)', borderWidth: '2px' }} />
                  <p className="card-text px-2" style={{ color: '#0D3B43', fontSize: '16px', lineHeight: '1.7', fontWeight: '500', maxWidth: '800px', margin: '0 auto' }}>
                    Dr. Saurabh Kumar Shukla (B.H.M.S., P.G.D.Y.) is an experienced Homeopathic Consultant Physician and dedicated social worker specializing in chronic, complex, and incurable illnesses. In addition to his primary clinical practice, he serves as a Consultant Physician at Punjabi Hospital and actively manages a specialized De-addiction Center (नशा मुक्ति केंद्र) to support natural detox and rehabilitation. By combining advanced clinical homeopathic methodologies with yoga therapy and holistic wellness protocols, Dr. Shukla is committed to delivering safe, gentle, and highly effective natural healing pathways that foster long-term recovery and physical restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
