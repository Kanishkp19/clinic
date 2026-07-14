"use client";

export default function Cta() {
  return (
    <section className="bg-primary" style={{ position: 'relative' }}>
      <div 
        className="bg-holder bg-size" 
        style={{ 
          backgroundImage: 'url(/assets/img/gallery/cta-bg.png)', 
          backgroundPosition: 'center right', 
          marginTop: '-8.125rem', 
          backgroundSize: 'contain' 
        }} 
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold text-light">Have Questions? Contact Us Directly</h2>
            <p className="text-soft-primary">Reach out directly for consultation details, clinic locations, or general health inquiries.</p>
          </div>
          <div className="col-lg-6">
            <h5 className="mb-3 text-soft-primary">CLINIC HELPLINES</h5>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a className="btn btn-lg btn-light rounded-3 px-5 py-3 fw-bold" href="tel:7398956998">
                Call Helpline
              </a>
              <a className="btn btn-lg btn-outline-light rounded-3 px-5 py-3" href="https://wa.me/917398956998" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
