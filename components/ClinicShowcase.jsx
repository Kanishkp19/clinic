"use client";

import { useState, useEffect } from 'react';
import CircularGallery from './CircularGallery';

export default function ClinicShowcase() {
  const slides = [1,2, 3, 4];
  const [galleryHeight, setGalleryHeight] = useState('700px');

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth < 768) {
        setGalleryHeight('380px');
      } else if (window.innerWidth < 992) {
        setGalleryHeight('500px');
      } else {
        setGalleryHeight('700px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prepare gallery items from clinic slideshow images
  const galleryItems = slides.map((val) => ({
    image: `/assets/img/slideshow/${val}.jpg`,
    text: `Clinic ${val}`
  }));

  return (
    <section className="py-5 snap-section" id="showcase">
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <h1 className="text-center">CLINIC SHOWCASE / गैलरी</h1>
            <p className="text-center text-secondary fs-1">
              Interactive 3D gallery of our clinic premises, facilities, and wellness environments. Scroll or drag to explore.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={{ height: galleryHeight, position: 'relative' }}>
              <CircularGallery
                items={galleryItems}
                bend={0}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
                scrollSpeed={2}
                autoRotate={true}
                autoRotateSpeed={0.15}
                fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
                font="bold 30px Orbitron"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
