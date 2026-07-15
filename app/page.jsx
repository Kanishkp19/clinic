"use client";

import Silk from "../components/Silk";
import PillNav from "../components/PillNav";
import MagicBento from "../components/MagicBento";
import AnimatedContent from "../components/AnimatedContent";
import HeroHeader from "../components/HeroHeader";
import About from "../components/About";
import OurDoctors from "../components/OurDoctors";
import HairRegrowthSection from "../components/HairRegrowthSection";
import PeopleWhoLoves from "../components/PeopleWhoLoves";
import ClinicShowcase from "../components/ClinicShowcase";
import Appointment from "../components/Appointment";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";

export default function HomePage() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#departments' },
    { label: 'Physician', href: '#doctors' },
    { label: 'Success Case', href: '#hair-regrowth' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Appointment', href: '#appointment' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
    { label: 'WhatsApp', href: 'https://wa.me/917398956998', ariaLabel: 'Contact on WhatsApp' }
  ];

  return (
    <>
      {/* Floating navigation header */}
      <PillNav
        logo="/assets/img/logo.svg"
        logoAlt="Om Homeopathic Clinic Logo"
        items={navItems}
        ease="power2.out"
        baseColor="#0D3B43"
        pillColor="#47391B"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
        initialLoadAnimation={true}
      />

      <main className="main" id="top">
        {/* Animated Hero Section */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.1}
          delay={0.1}
          className="snap-section"
        >
          <HeroHeader />
        </AnimatedContent>

        {/* About Us Section */}
        <About />

        {/* Services & Treatments Section (MagicBento Grid) */}
        <section className="snap-section" id="departments" style={{ position: 'relative' }}>
          <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 120px)', padding: '2rem 0' }}>
            <div className="row w-100 justify-content-center">
              <div className="col-12 text-center mb-4">
                <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: '#0D3B43', fontFamily: 'sans-serif' }}>
                  OUR SERVICES &amp; TREATMENTS / हमारे उपचार
                </h1>
                <p className="fs-1 mb-0 text-secondary">
                  Specialists in chronic and incurable diseases.
                </p>
              </div>
            </div>
            <div className="row w-100 justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <MagicBento 
                  textAutoHide={true}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  enableMagnetism={true}
                  clickEffect={true}
                  spotlightRadius={300}
                  particleCount={12}
                  glowColor="71, 57, 27"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Physician Section */}
        <OurDoctors />

        {/* Successful Hair Regrowth Case Study */}
        <HairRegrowthSection />

        {/* Clinical Cases & Camps Gallery Section */}
        <PeopleWhoLoves />

        {/* Clinic Slideshow Showcase Section */}
        <ClinicShowcase />

        {/* Appointment Scheduling Section */}
        <Appointment />

        {/* Achievements & Credentials Section */}
        <BlogPost />

        {/* Helpline CTA & Footer Section */}
        <div className="snap-section">
          <Footer />
        </div>
      </main>

      {/* Global Fluid Silk Background wave */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', backgroundColor: '#E3EEF4' }}>
        <Silk
          speed={0.8}
          scale={0.8}
          color="#E3EEF4"
          noiseIntensity={0.8}
          rotation={0}
        />
      </div>
    </>
  );
}
