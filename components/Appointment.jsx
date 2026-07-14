"use client";

import { useState, useEffect } from 'react';
import ShapeGrid from './ShapeGrid';
import SideRays from './SideRays';

export default function Appointment() {
  const [activeBranch, setActiveBranch] = useState(0);
  const [isFlyerZoomed, setIsFlyerZoomed] = useState(false);
  const [liveStatus, setLiveStatus] = useState({ open: false, message: 'Checking clinic status...' });

  const branches = [
    {
      name: "Kapildhara (Main Clinic)",
      hindiName: "आवास क्लिनिक (कपिलधारा)",
      address: "In front of Dharamshala No. 2, Kapildhara, Varanasi",
      phone: "7398956998",
      timings: [
        { label: "Morning Session", time: "7:00 AM - 8:30 AM" },
        { label: "Afternoon Session", time: "12:30 PM - 2:00 PM" },
        { label: "Evening Session", time: "7:00 PM - 8:30 PM" }
      ],
      days: "Open Daily (Sunday Open)",
      mapUrl: "https://maps.google.com/?q=Dharamshala+No.+2+Kapildhara+Varanasi"
    },
    {
      name: "Branch 1 (Letupur)",
      hindiName: "शाखा - १ (लेटूपुर)",
      address: "Near Petrol Pump & Deepak Nursery, Balua Road, Varanasi",
      phone: "7398619411",
      timings: [
        { label: "Morning Session", time: "9:00 AM - 12:00 PM" }
      ],
      days: "Monday - Saturday (Sunday Closed)",
      mapUrl: "https://maps.google.com/?q=Balua+Road+Varanasi"
    },
    {
      name: "Branch 2 (Koniya)",
      hindiName: "शाखा - २ (कोनिया)",
      address: "Near Koniya Awas Board & Mansa Mandir, Kazzakpura, Varanasi",
      phone: "7398956998",
      timings: [
        { label: "Evening Session", time: "5:00 PM - 7:00 PM" }
      ],
      days: "Monday - Saturday (Sunday Closed)",
      mapUrl: "https://maps.google.com/?q=Kazzakpura+Varanasi"
    }
  ];

  function calculateClinicStatus(branchIdx) {
    try {
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: 'numeric', minute: 'numeric', weekday: 'long' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const formatted = formatter.formatToParts(new Date());
      
      let weekday = '';
      let hour = 0;
      let minute = 0;
      
      formatted.forEach(part => {
        if (part.type === 'weekday') weekday = part.value;
        if (part.type === 'hour') hour = parseInt(part.value, 10);
        if (part.type === 'minute') minute = parseInt(part.value, 10);
      });

      const currentTimeInMinutes = hour * 60 + minute;
      const isSunday = weekday === 'Sunday';

      if (branchIdx === 0) {
        // Kapildhara: Sunday Open
        // Timings: 7:00-8:30 (420 to 510), 12:30-14:00 (750 to 840), 19:00-20:30 (1140 to 1230)
        const slot1 = currentTimeInMinutes >= 420 && currentTimeInMinutes < 510;
        const slot2 = currentTimeInMinutes >= 750 && currentTimeInMinutes < 840;
        const slot3 = currentTimeInMinutes >= 1140 && currentTimeInMinutes < 1230;

        if (slot1 || slot2 || slot3) {
          let closing = '';
          if (slot1) closing = '8:30 AM';
          if (slot2) closing = '2:00 PM';
          if (slot3) closing = '8:30 PM';
          return { open: true, message: `Open Now • Closes at ${closing}` };
        } else {
          let nextSession = '';
          if (currentTimeInMinutes < 420) nextSession = '7:00 AM';
          else if (currentTimeInMinutes < 750) nextSession = '12:30 PM';
          else if (currentTimeInMinutes < 1140) nextSession = '7:00 PM';
          else nextSession = '7:00 AM tomorrow';
          return { open: false, message: `Closed • Opens at ${nextSession}` };
        }
      } else if (branchIdx === 1) {
        // Letupur: Sunday Closed
        if (isSunday) {
          return { open: false, message: 'Closed Today (Sunday)' };
        }
        // Timings: 9:00-12:00 (540 to 720)
        const open = currentTimeInMinutes >= 540 && currentTimeInMinutes < 720;
        if (open) {
          return { open: true, message: 'Open Now • Closes at 12:00 PM' };
        } else {
          const nextSession = currentTimeInMinutes < 540 ? '9:00 AM' : '9:00 AM tomorrow';
          return { open: false, message: `Closed • Opens at ${nextSession}` };
        }
      } else if (branchIdx === 2) {
        // Koniya: Sunday Closed
        if (isSunday) {
          return { open: false, message: 'Closed Today (Sunday)' };
        }
        // Timings: 17:00-19:00 (1020 to 1140)
        const open = currentTimeInMinutes >= 1020 && currentTimeInMinutes < 1140;
        if (open) {
          return { open: true, message: 'Open Now • Closes at 7:00 PM' };
        } else {
          const nextSession = currentTimeInMinutes < 1020 ? '5:00 PM' : '5:00 PM tomorrow';
          return { open: false, message: `Closed • Opens at ${nextSession}` };
        }
      }
    } catch (e) {
      return { open: false, message: 'Timings available below' };
    }
    return { open: false, message: 'Closed' };
  }

  useEffect(() => {
    setLiveStatus(calculateClinicStatus(activeBranch));
    const timer = setInterval(() => {
      setLiveStatus(calculateClinicStatus(activeBranch));
    }, 30000);
    return () => clearInterval(timer);
  }, [activeBranch]);

  return (
    <section className="snap-section" id="appointment" style={{ position: 'relative' }}>
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" style={{ position: 'relative' }}>
              <div 
                className="bg-holder bg-size" 
                style={{ 
                  backgroundImage: 'url(/assets/img/gallery/people.png)', 
                  backgroundPosition: 'top center', 
                  backgroundSize: 'contain',
                  opacity: 0.25
                }} 
              />
              <h1 className="text-center" style={{ position: 'relative', zIndex: 1 }}>
                BOOK AN APPOINTMENT / अपॉइंटमेंट लें
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 py-lg-4" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-4">
            {/* Left Side: Clickable Poster image */}
            <div className="col-lg-5 text-center">
              <div 
                className="position-relative overflow-hidden rounded-3 shadow-lg"
                style={{ 
                  cursor: 'zoom-in',
                  border: '5px solid rgba(13, 59, 67, 0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onClick={() => setIsFlyerZoomed(true)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = 'rgba(71, 57, 27, 0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(13, 59, 67, 0.2)'; }}
              >
                <img 
                  className="img-fluid d-block w-100" 
                  src="/assets/img/client/appointment-banner.jpg" 
                  onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = '/assets/img/client/appointment-banner.svg';
                  }} 
                  alt="Book Appointment Flyer" 
                />
                {/* Hover indicator overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(13, 59, 67, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}
                className="hover-overlay"
                >
                  <span style={{
                    color: '#fff',
                    background: '#47391B',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: '700',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}>
                    🔍 View Full Details / विवरण देखें
                  </span>
                </div>
                <style>{`
                  .position-relative:hover .hover-overlay {
                    opacity: 1 !important;
                  }
                `}</style>
              </div>
            </div>

            {/* Right Side: Interactive glassmorphic booking card */}
            <div className="col-lg-7">
              <div 
                className="p-4 p-lg-5 rounded-3 border-0"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(188, 207, 203, 0.9) 0%, rgba(168, 189, 184, 0.85) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 30px 60px rgba(13, 59, 67, 0.12)',
                  border: '1px solid rgba(13, 59, 67, 0.12)'
                }}
              >
                {/* SideRays WebGL animation — strictly inside the card (overflow:hidden clips it) */}
                <SideRays
                  speed={1.2}
                  rayColor1="#0D3B43"
                  rayColor2="#47391B"
                  intensity={3.5}
                  spread={2.2}
                  origin="top-right"
                  tilt={10}
                  saturation={1.8}
                  blend={0.6}
                  falloff={1.4}
                  opacity={0.55}
                />

                {/* Background ShapeGrid — z:1, above SideRays */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, opacity: 0.5 }}>
                  <ShapeGrid 
                    speed={0.3} 
                    squareSize={40}
                    direction='diagonal'
                    borderColor='rgba(13, 59, 67, 0.15)'
                    hoverFillColor='rgba(13, 59, 67, 0.25)'
                    shape='hexagon'
                    hoverTrailAmount={5}
                  />
                </div>

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Branch Tab Selector pills */}
                  <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-md-start">
                    {branches.map((b, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveBranch(i)}
                        style={{
                          background: activeBranch === i ? '#0D3B43' : 'rgba(13, 59, 67, 0.1)',
                          color: activeBranch === i ? '#ffffff' : '#0D3B43',
                          border: 'none',
                          borderRadius: '50px',
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          boxShadow: activeBranch === i ? '0 8px 20px rgba(13, 59, 67, 0.2)' : 'none',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => {
                          if (activeBranch !== i) e.currentTarget.style.background = 'rgba(13, 59, 67, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          if (activeBranch !== i) e.currentTarget.style.background = 'rgba(13, 59, 67, 0.1)';
                        }}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>

                  <h3 className="fw-bold mb-1" style={{ color: '#0D3B43' }}>{branches[activeBranch].name}</h3>
                  <h6 className="fw-bold mb-3" style={{ color: '#47391B' }}>{branches[activeBranch].hindiName}</h6>

                  {/* Live Open / Closed Banner */}
                  <div 
                    className="mb-4 p-3 rounded-3 d-flex align-items-center gap-2"
                    style={{
                      background: liveStatus.open ? 'rgba(37, 211, 102, 0.12)' : 'rgba(220, 53, 69, 0.12)',
                      border: liveStatus.open ? '1px solid rgba(37, 211, 102, 0.25)' : '1px solid rgba(220, 53, 69, 0.25)',
                      color: liveStatus.open ? '#0f7d3c' : '#bd2130',
                      fontSize: '14px',
                      fontWeight: '700'
                    }}
                  >
                    <span 
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: liveStatus.open ? '#25D366' : '#DC3545',
                        display: 'inline-block',
                        animation: 'pulse 1.8s infinite'
                      }}
                    />
                    <style>{`
                      @keyframes pulse {
                        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
                        70% { transform: scale(1); box-shadow: 0 0 0 5px rgba(37, 211, 102, 0); }
                        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
                      }
                    `}</style>
                    {liveStatus.message}
                  </div>

                  {/* Address and Timings Detail Panel */}
                  <div className="mb-4">
                    <div style={{ color: '#0D3B43', fontSize: '15px', fontWeight: '500' }} className="d-flex align-items-start gap-2 mb-3">
                      <i className="fas fa-map-marker-alt mt-1 flex-shrink-0" style={{ color: '#47391B', fontSize: '16px' }}></i>
                      <span>
                        <strong>Address: </strong>
                        {branches[activeBranch].address}
                        <a 
                          href={branches[activeBranch].mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="ms-2 text-decoration-none fw-bold" 
                          style={{ color: '#47391B', fontSize: '13px' }}
                        >
                          (View on Map)
                        </a>
                      </span>
                    </div>

                    <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(13, 59, 67, 0.08)' }}>
                      <p style={{ color: '#0D3B43', fontWeight: '700', fontSize: '14px', marginBottom: '8px' }} className="d-flex align-items-center gap-2">
                        <i className="fas fa-clock" style={{ color: '#47391B', fontSize: '16px' }}></i>
                        Consultation timings:
                      </p>
                      <div className="d-flex flex-column gap-1 ms-4">
                        {branches[activeBranch].timings.map((t, idx) => (
                          <div key={idx} className="d-flex justify-content-between" style={{ fontSize: '14px', color: '#0D3B43', fontWeight: '500' }}>
                            <span style={{ opacity: 0.8 }}>{t.label}:</span>
                            <span className="fw-bold">{t.time}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 mb-0 ms-4 fw-bold" style={{ color: '#47391B', fontSize: '13px' }}>
                        {branches[activeBranch].days}
                      </p>
                    </div>
                  </div>

                  <p className="mb-3" style={{ color: '#0D3B43', fontSize: '14px', fontWeight: '600' }}>
                    Click below to book your appointment instantly at this branch:
                  </p>

                  {/* Action Buttons — 2 rows × 2 columns */}
                  <div className="row g-3 mb-3">
                    {/* Row 1 */}
                    <div className="col-6">
                      <a
                        href={`tel:${branches[activeBranch].phone}`}
                        className="text-decoration-none d-flex align-items-center justify-content-center w-100"
                        style={{
                          background: '#0D3B43',
                          color: '#ffffff',
                          border: '2px solid #0D3B43',
                          borderRadius: '50px',
                          padding: '11px 16px',
                          fontWeight: '700',
                          fontSize: '14px',
                          boxShadow: '0 6px 16px rgba(13, 59, 67, 0.18)',
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#071f23'; e.currentTarget.style.borderColor = '#071f23'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#0D3B43'; e.currentTarget.style.borderColor = '#0D3B43'; e.currentTarget.style.transform = 'none'; }}
                      >
                        <i className="fas fa-phone-alt me-2" style={{ fontSize: '13px' }}></i>
                        Call Helpline
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href={`https://wa.me/91${branches[activeBranch].phone}?text=Hello%20Dr.%20Shukla,%20I%20want%20to%20book%20an%20appointment%20for%20the%20${branches[activeBranch].name}%20branch.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-flex align-items-center justify-content-center w-100"
                        style={{
                          background: 'transparent',
                          color: '#0D3B43',
                          border: '1.5px solid #0D3B43',
                          borderRadius: '50px',
                          padding: '11px 16px',
                          fontWeight: '700',
                          fontSize: '14px',
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(13,59,67,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                      >
                        <i className="fab fa-whatsapp me-2" style={{ fontSize: '15px' }}></i>
                        WhatsApp Chat
                      </a>
                    </div>

                    {/* Row 2 */}
                    <div className="col-6">
                      <a
                        href={branches[activeBranch].mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-flex align-items-center justify-content-center w-100"
                        style={{
                          background: 'transparent',
                          color: '#0D3B43',
                          border: '1.5px solid #0D3B43',
                          borderRadius: '50px',
                          padding: '11px 16px',
                          fontWeight: '700',
                          fontSize: '14px',
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(13,59,67,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                      >
                        <i className="fas fa-map-marker-alt me-2" style={{ fontSize: '13px' }}></i>
                        Get Directions
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href={`tel:${branches[activeBranch].phone}`}
                        className="text-decoration-none d-flex align-items-center justify-content-center w-100"
                        style={{
                          background: '#47391B',
                          color: '#ffffff',
                          border: '2px solid #47391B',
                          borderRadius: '50px',
                          padding: '11px 16px',
                          fontWeight: '700',
                          fontSize: '14px',
                          boxShadow: '0 6px 16px rgba(71,57,27,0.18)',
                          transition: 'all 0.25s ease',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#322813'; e.currentTarget.style.borderColor = '#322813'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = '#47391B'; e.currentTarget.style.borderColor = '#47391B'; e.currentTarget.style.transform = 'none'; }}
                      >
                        <i className="fas fa-calendar-check me-2" style={{ fontSize: '13px' }}></i>
                        Book via Phone
                      </a>
                    </div>
                  </div>

                  {/* Phone display */}
                  <p className="mb-4" style={{ color: '#0D3B43', fontSize: '13px', fontWeight: '600', opacity: 0.8 }}>
                    Branch Helpline: <strong style={{ color: '#47391B' }}>+91 {branches[activeBranch].phone}</strong>
                  </p>
                  
                  {/* Note panel */}
                  <div 
                    className="p-3 rounded-3 d-flex align-items-center gap-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      border: '1px solid rgba(13, 59, 67, 0.1)'
                    }}
                  >
                    <i className="fas fa-exclamation-triangle text-warning flex-shrink-0" style={{ fontSize: '18px' }}></i>
                    <p className="mb-0 fs--1" style={{ color: '#0D3B43', fontWeight: '600' }}>
                      <strong>Prior Booking Recommended: </strong>Please book in advance to secure your session and avoid long waiting times at the clinic branches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magnifier Lightbox modal for flyer poster */}
      {isFlyerZoomed && (
        <div 
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(13, 59, 67, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 10000,
            cursor: 'zoom-out',
            padding: '20px'
          }}
          onClick={() => setIsFlyerZoomed(false)}
        >
          <button 
            onClick={() => setIsFlyerZoomed(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#47391B',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#fff',
              fontSize: '22px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
               justifyContent: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              zIndex: 10001
            }}
          >
            &times;
          </button>
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="position-relative"
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#fff'
            }}
          >
            <img 
              src="/assets/img/client/appointment-banner.jpg" 
              alt="Zoomed Clinic Banner" 
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
