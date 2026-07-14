"use client";
import CircularGallery from './CircularGallery';

export default function ClinicShowcase() {
  const slides = Array.from({ length: 10 }, (_, i) => i + 1);

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
            <div style={{ height: '700px', position: 'relative' }}>
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
