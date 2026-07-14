"use client";

export default function HeroHeader() {
  return (
    <section className="pt-5 pt-md-0 pb-0" id="home" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div 
        className="bg-holder bg-size" 
        style={{ 
          backgroundImage: 'url(/assets/img/gallery/dot-bg.png)', 
          backgroundPosition: 'top left', 
          backgroundSize: 'auto', 
          zIndex: 1 
        }} 
      />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end">
            <img 
              className="pt-7 pt-md-0 w-100 hero-img-3d" 
              src="/assets/img/client/hero-header.jpg" 
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = '/assets/img/client/hero-header.svg';
              }} 
              alt="hero-header" 
            />
          </div>
          <div className="col-md-7 col-xl-6 col-xxl-5 text-md-start text-center pt-2 pb-5 py-md-5">
            <h1 className="fw-light font-base fs-5 fs-xxl-6">
              <strong>Om Homeopathic </strong>Clinic
              <br />
              <span className="fs-3 fw-bold text-primary">(ओम होम्योपैथिक क्लिनिक)</span>
            </h1>
            <p className="fs-1 fw-bold text-danger my-3">
              Specialist in chronic and incurable diseases 
              <br />
              पुराने व असाध्य रोग विशेषज्ञ
            </p>
            <p className="fs-0 text-secondary mb-4">
              Consultation by <strong>Dr. Saurabh Kumar Shukla (B.H.M.S., P.G.D.Y.)</strong>, Consultant Physician at Punjabi Hospital. Registered Homeopathic Practitioner (Reg. No. HO38824). Also functions as a De-addiction Center (नशा मुक्ति केंद्र).
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
              <a className="btn btn-lg btn-primary rounded-pill" href="tel:7398956998" role="button">
                Call Helpline
              </a>
              <a className="btn btn-lg btn-outline-primary rounded-pill" href="https://wa.me/917398956998" target="_blank" rel="noopener noreferrer" role="button">
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
