"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
  selectedIdx: externalSelectedIdx,
  setSelectedIdx: externalSetSelectedIdx
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [localSelectedIdx, localSetSelectedIdx] = useState(null);

  const selectedIdx = externalSelectedIdx !== undefined ? externalSelectedIdx : localSelectedIdx;
  const setSelectedIdx = externalSetSelectedIdx !== undefined ? externalSetSelectedIdx : localSetSelectedIdx;

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#0D3B43',
      gradient: 'linear-gradient(145deg, #0D3B43, #000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#47391B',
      gradient: 'linear-gradient(210deg, #47391B, #000)',
      url: 'https://linkedin.com/in/'
    }
  ];
  
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = (idx) => {
    setSelectedIdx(idx);
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <div
        ref={rootRef}
        className={`chroma-grid ${className}`}
        style={{
          '--r': `${radius}px`,
          '--cols': columns,
          '--rows': rows
        }}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {data.map((c, i) => (
          <article
            key={i}
            className="chroma-card"
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(i)}
            style={{
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
              cursor: 'pointer'
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
              <div className="chroma-zoom-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
        <div className="chroma-overlay" />
        <div ref={fadeRef} className="chroma-fade" />
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          onClick={() => setSelectedIdx(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(5, 25, 30, 0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f8f7 100%)',
              borderRadius: '24px',
              maxWidth: '920px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 40px 80px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(13, 59, 67, 0.12)'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              style={{
                position: 'sticky',
                top: '16px',
                float: 'right',
                marginRight: '16px',
                background: '#0D3B43',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.2s ease',
                zIndex: 10,
                flexShrink: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#47391B'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0D3B43'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              &times;
            </button>

            <div style={{ padding: '28px', paddingTop: '16px' }}>
              <div className="row g-4 align-items-start">
                {/* Left: Image */}
                <div className="col-md-5">
                  <div style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background: 'rgba(0,0,0,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '300px',
                    maxHeight: '420px'
                  }}>
                    <img 
                      src={data[selectedIdx].image} 
                      alt={data[selectedIdx].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Stats Row */}
                  <div className="row g-2 mt-3">
                    {[
                      { label: 'Duration', value: data[selectedIdx].duration },
                      { label: 'Outcome', value: data[selectedIdx].outcome }
                    ].map((stat, si) => (
                      <div key={si} className="col-6">
                        <div style={{
                          background: si === 0 ? '#0D3B43' : '#47391B',
                          borderRadius: '14px',
                          padding: '12px 14px',
                          textAlign: 'center'
                        }}>
                          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{stat.label}</div>
                          <div style={{ color: '#fff', fontSize: '13px', fontWeight: '700', marginTop: '4px', lineHeight: '1.3' }}>{stat.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="col-md-7 d-flex flex-column">
                  {/* Category badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                    <span style={{
                      background: data[selectedIdx].borderColor === '#47391B' ? '#47391B' : '#0D3B43',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      padding: '4px 12px',
                      borderRadius: '50px'
                    }}>
                      {data[selectedIdx].handle}
                    </span>
                    {data[selectedIdx].category && (
                      <span style={{
                        background: 'rgba(13, 59, 67, 0.08)',
                        color: '#0D3B43',
                        fontSize: '11px',
                        fontWeight: '600',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        border: '1px solid rgba(13, 59, 67, 0.15)'
                      }}>
                        {data[selectedIdx].category}
                      </span>
                    )}
                  </div>

                  <h2 style={{ color: '#0D3B43', fontWeight: '800', fontSize: '22px', lineHeight: '1.3', marginBottom: '12px' }}>
                    {data[selectedIdx].title}
                  </h2>

                  {/* Doctor & Location */}
                  {(data[selectedIdx].doctor || data[selectedIdx].location) && (
                    <div style={{ marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {data[selectedIdx].doctor && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#0D3B43', fontSize: '13px', fontWeight: '600' }}>
                          <i className="fas fa-user-md" style={{ fontSize: '12px', opacity: 0.7 }}></i>
                          {data[selectedIdx].doctor}
                        </div>
                      )}
                      {data[selectedIdx].location && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#0D3B43', fontSize: '13px', fontWeight: '500', opacity: 0.75 }}>
                          <i className="fas fa-map-marker-alt" style={{ fontSize: '12px' }}></i>
                          {data[selectedIdx].location}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'rgba(13, 59, 67, 0.1)', marginBottom: '14px' }} />

                  {/* Description */}
                  <p style={{ color: '#2d4a4e', fontSize: '14px', lineHeight: '1.75', fontWeight: '400', marginBottom: '16px' }}>
                    {data[selectedIdx].description || data[selectedIdx].subtitle}
                  </p>

                  {/* Highlights */}
                  {data[selectedIdx].highlights?.length > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#0D3B43', opacity: 0.6, marginBottom: '8px' }}>
                        Key Highlights
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {data[selectedIdx].highlights.map((h, hi) => (
                          <li key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '13.5px', color: '#1a3a3f', fontWeight: '500', lineHeight: '1.5' }}>
                            <span style={{ color: data[selectedIdx].borderColor === '#47391B' ? '#47391B' : '#0D3B43', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>
                              <i className="fas fa-check-circle"></i>
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  {data[selectedIdx].tags?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {data[selectedIdx].tags.map((tag, ti) => (
                        <span key={ti} style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          color: '#0D3B43',
                          background: 'rgba(13, 59, 67, 0.07)',
                          border: '1px solid rgba(13, 59, 67, 0.15)',
                          padding: '3px 10px',
                          borderRadius: '50px'
                        }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Prev / Next Navigation */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '8px', borderTop: '1px solid rgba(13, 59, 67, 0.08)' }}>
                    <button
                      onClick={() => setSelectedIdx((prev) => (prev === 0 ? data.length - 1 : prev - 1))}
                      style={{
                        flex: 1,
                        background: 'rgba(13, 59, 67, 0.08)',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '10px 16px',
                        color: '#0D3B43',
                        fontWeight: '700',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(13, 59, 67, 0.15)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(13, 59, 67, 0.08)'}
                    >
                      &larr; Previous
                    </button>
                    <button
                      onClick={() => setSelectedIdx((prev) => (prev === data.length - 1 ? 0 : prev + 1))}
                      style={{
                        flex: 1,
                        background: '#0D3B43',
                        border: 'none',
                        borderRadius: '30px',
                        padding: '10px 16px',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#47391B'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#0D3B43'}
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChromaGrid;
