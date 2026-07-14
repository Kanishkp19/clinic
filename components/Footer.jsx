"use client";

import LightRays from './LightRays';
import ShinyText from './ShinyText';

export default function Footer() {
  return (
    <>
      {/* Overriding global section transparency for contact section with dark background */}
      <style>{`
        #contact.dark-contact-section {
          background-color: #000000 !important;
        }
        #contact .light-rays-container canvas {
          opacity: 1;
        }
        #contact .light-rays-container {
          z-index: 1;
        }
        body, html {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <section className="dark-contact-section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* LightRays WebGL background animation - cyan rays over dark background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="contact-light-rays"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row py-4 g-4">
            <div className="col-lg-4 mb-4 text-center text-lg-start">
              <a className="text-decoration-none" href="#">
                <img src="/assets/img/gallery/footer-logo.png" height="51" alt="Om Homeopathic Clinic Logo" />
              </a>
              <p className="text-light my-3">
                <strong>Om Homeopathic Clinic</strong>
                <br />
                Specialist in chronic and incurable diseases.
                <br />
                (पुराने व असाध्य रोग विशेषज्ञ)
              </p>
              <p className="text-light mb-1">
                <strong>Helpline:</strong>
                <br />
                <a className="text-light text-decoration-none fw-bold" href="tel:7398956998">+91 7398956998</a>
                <br />
                <a className="text-light text-decoration-none fw-bold" href="tel:7398619411">+91 7398619411</a>
              </p>
              <p className="text-light mt-3">
                <strong>Dr. Saurabh Kumar Shukla</strong>
                <br />
                B.H.M.S., P.G.D.Y. (Reg. No. HO38824)
              </p>
            </div>

            <div className="col-lg-8 mb-4">
              <h5 className="fw-bold text-light mb-3">Our Clinics &amp; Schedules (क्लिनिक समय व स्थान)</h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      backdropFilter: 'blur(10px)', 
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%' 
                    }}
                  >
                    <h6 className="fw-bold" style={{ color: '#E3EEF4' }}>Main Clinic (Khalispur)</h6>
                    <p className="text-light fs--1 mb-2">Khalispur, Kapildhara (In front of Dharmashala No. 2 and the Tower), Varanasi</p>
                    <hr className="my-2" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <p className="text-light fs--2 mb-0">
                      <strong>Timings:</strong>
                      <br />
                      Morning: 7:00 AM – 8:30 AM
                      <br />
                      Afternoon: 12:30 PM – 2:00 PM
                      <br />
                      Evening: 7:00 PM – 8:30 PM
                      <br />
                      <span className="badge bg-success mt-2">Open on Sundays</span>
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      backdropFilter: 'blur(10px)', 
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%' 
                    }}
                  >
                    <h6 className="fw-bold text-light">Branch 1 (Ledhupur)</h6>
                    <p className="text-light fs--1 mb-2">Balua Road, Ledhupur (Between Petrol Pump and Deepak Nursery), Varanasi</p>
                    <hr className="my-2" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <p className="text-light fs--2 mb-0">
                      <strong>Timings:</strong>
                      <br />
                      Morning: 9:00 AM – 12:00 PM
                      <br />
                      <span className="badge bg-danger mt-2">Closed on Sundays</span>
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div 
                    className="p-3 rounded-3"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      backdropFilter: 'blur(10px)', 
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%' 
                    }}
                  >
                    <h6 className="fw-bold text-light">Branch 2 (Konia)</h6>
                    <p className="text-light fs--1 mb-2">Kazzakpura, Konia (Before Oxford school, next to Mansa Devi Temple), Varanasi</p>
                    <hr className="my-2" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <p className="text-light fs--2 mb-0">
                      <strong>Timings:</strong>
                      <br />
                      Evening: 5:00 PM – 7:00 PM
                      <br />
                      <span className="badge bg-danger mt-2">Closed on Sundays</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section - same dark background with LightRays */}
        <div className="container" style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
          <div className="row justify-content-md-between justify-content-evenly">
            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
              <p className="fs--1 my-2 fw-bold" style={{ color: 'rgba(255,255,255,0.7)' }}>
                All rights Reserved &copy; Om Homeopathic Clinic, 2026
              </p>
            </div>
            <div className="col-12 col-sm-8 col-md-6">
              <p className="fs--1 my-2 text-center text-md-end" style={{ 
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                <ShinyText
                  text="Made with"
                  speed={2.5}
                  delay={0.3}
                  color="rgba(255,255,255,0.9)"
                  shineColor="#00ffff"
                  spread={100}
                  direction="left"
                  pauseOnHover={true}
                />
                &nbsp;
                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0080" viewBox="0 0 16 16" style={{ 
                  animation: 'heartbeat 1.5s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 8px rgba(255, 0, 128, 0.6))'
                }}>
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
                &nbsp;
                <ShinyText
                  text="by"
                  speed={2.5}
                  delay={0.3}
                  color="rgba(255,255,255,0.9)"
                  shineColor="#00ffff"
                  spread={100}
                  direction="left"
                  pauseOnHover={true}
                />
                &nbsp;
                <a className="fw-bold" style={{ 
                  color: '#00ffff', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  textShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }} 
                href="https://www.site-story.site/" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.target.style.textShadow = '0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.5)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)';
                  e.target.style.transform = 'scale(1)';
                }}
                >
                  <ShinyText
                    text="Site-Story"
                    speed={2}
                    delay={0.2}
                    color="#00ffff"
                    shineColor="#ffffff"
                    spread={100}
                    direction="left"
                    pauseOnHover={true}
                  />
                </a>
              </p>
              <style jsx>{`
                @keyframes heartbeat {
                  0%, 100% {
                    transform: scale(1);
                  }
                  10%, 30% {
                    transform: scale(1.1);
                  }
                  20%, 40% {
                    transform: scale(1);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
