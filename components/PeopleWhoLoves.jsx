"use client";

import { useState, useEffect } from 'react';
import ChromaGrid from './ChromaGrid';

export default function PeopleWhoLoves() {
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(1);
  const [containerHeight, setContainerHeight] = useState('calc(100vh - 310px)');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
        setRows(4);
        setContainerHeight('auto');
      } else if (window.innerWidth < 1024) {
        setColumns(2);
        setRows(2);
        setContainerHeight('auto');
      } else {
        setColumns(4);
        setRows(1);
        setContainerHeight('calc(100vh - 310px)');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const items = [
    {
      image: '/assets/img/client/case-hair-thinning.jpg',
      title: 'Severe Hair Thinning Treatment',
      subtitle: 'Remarkable recovery in hair density and scalp health within 4 months of customized homeopathic remedies.',
      handle: 'Clinical Result',
      borderColor: '#0D3B43',
      gradient: 'linear-gradient(145deg, rgba(13, 59, 67, 0.4) 0%, rgba(15, 37, 55, 0.9) 100%)',
      // Lightbox rich content
      category: 'Dermatology & Trichology',
      duration: '4 Months Treatment',
      outcome: 'Full Recovery',
      doctor: 'Dr. Saurabh Kumar Shukla',
      location: 'Kapildhara Main Clinic, Varanasi',
      description: 'Patient presented with severe diffuse hair thinning and scalp inflammation of 2+ years duration, having previously tried multiple allopathic treatments without success. Customized constitutional homeopathic treatment was initiated with remedies targeting root-cause hormonal imbalance and scalp micro-circulation. Within 4 months, significant regrowth was documented with a marked reduction in daily hair fall from ~300 strands to under 30 strands per day.',
      highlights: [
        'Documented 80% reduction in daily hair fall',
        'Significant scalp health improvement',
        'No side effects throughout treatment',
        'Continued monitoring for 6 months post-recovery'
      ],
      tags: ['Hair Loss', 'Trichology', 'Dermatology', 'Homeopathy']
    },
    {
      image: '/assets/img/client/case-alopecia.jpg',
      title: 'Alopecia / Hair Loss Treatment',
      subtitle: 'Complete recovery and regrowth of hair patches for patients suffering from alopecia within 3 months.',
      handle: 'Clinical Result',
      borderColor: '#0D3B43',
      gradient: 'linear-gradient(145deg, rgba(13, 59, 67, 0.4) 0%, rgba(15, 37, 55, 0.9) 100%)',
      // Lightbox rich content
      category: 'Autoimmune — Alopecia Areata',
      duration: '3 Months Treatment',
      outcome: 'Complete Patch Regrowth',
      doctor: 'Dr. Saurabh Kumar Shukla',
      location: 'Branch 1 — Letupur, Varanasi',
      description: 'Patient diagnosed with Alopecia Areata — an autoimmune condition causing patchy hair loss — came seeking homeopathic treatment after failed steroid therapies. Using a precisely calibrated constitutional remedy along with dietary guidance and stress management protocols, complete regrowth was observed across all bald patches within 90 days. A 12-month follow-up confirmed no relapse of the condition.',
      highlights: [
        'Complete hair regrowth across 5 distinct bald patches',
        'Immune system normalization documented via blood work',
        '12-month relapse-free follow-up',
        'Patient discontinued prior steroid treatment safely'
      ],
      tags: ['Alopecia', 'Autoimmune', 'Hair Regrowth', 'Homeopathy']
    },
    {
      image: '/assets/img/client/camp-kapildhara.jpg',
      title: 'Varanasi Community Welfare Camp',
      subtitle: 'Free homeopathy consultations and medicine distribution camp organized for under-served rural communities.',
      handle: 'Medical Camp',
      borderColor: '#47391B',
      gradient: 'linear-gradient(145deg, rgba(71, 57, 27, 0.4) 0%, rgba(15, 37, 55, 0.9) 100%)',
      // Lightbox rich content
      category: 'Community Health Initiative',
      duration: '2-Day Event',
      outcome: '500+ Patients Treated',
      doctor: 'Dr. Saurabh Kumar Shukla & Team',
      location: 'Kapildhara, Varanasi (GP News Featured)',
      description: 'A landmark free homeopathy welfare camp organized at Kapildhara, Varanasi under the banner of Om Homeopathic Clinic. The 2-day event served over 500 patients from economically weaker sections of society with free consultations, diagnostic screening, and distribution of homeopathic medicines. The camp was covered by GP News and received overwhelming community support.',
      highlights: [
        'Over 500 patients screened and treated for free',
        'Medicines worth ₹1,00,000+ distributed without cost',
        'Conditions treated: Skin disorders, Digestive issues, Respiratory ailments, Chronic pain',
        'Featured in GP News regional broadcast'
      ],
      tags: ['Community Camp', 'Free Treatment', 'Varanasi', 'Social Initiative']
    },
    {
      image: '/assets/img/client/camp-sarnath.jpg',
      title: 'Sarnath Wellness Camp',
      subtitle: 'Providing free health check-ups, counseling, and natural treatments to rural families in Sarnath.',
      handle: 'Medical Camp',
      borderColor: '#47391B',
      gradient: 'linear-gradient(145deg, rgba(71, 57, 27, 0.4) 0%, rgba(15, 37, 55, 0.9) 100%)',
      // Lightbox rich content
      category: 'Rural Health Outreach',
      duration: '1-Day Event',
      outcome: '300+ Families Benefited',
      doctor: 'Dr. Saurabh Kumar Shukla & Associates',
      location: 'Sarnath, Varanasi District',
      description: 'The Sarnath Wellness Camp was organized to extend quality homeopathic healthcare to rural families living in and around the historic town of Sarnath, many of whom lack easy access to specialized medical care. Free health check-ups, basic diagnostic screening, nutritional counseling, and distribution of essential homeopathic medicines were provided. Special focus was given to children with chronic ailments and elderly patients with long-standing joint and digestive problems.',
      highlights: [
        '300+ rural families received free consultation and medicines',
        'Children\'s health screening: 120+ cases',
        'Elderly care focus: Joint pain, Digestive disorders, Respiratory issues',
        'Yoga and wellness counseling sessions also conducted'
      ],
      tags: ['Rural Health', 'Sarnath', 'Free Camp', 'Elderly Care']
    }
  ];

  return (
    <section className="snap-section" id="gallery" style={{ position: 'relative' }}>
      <div style={{ padding: '14px 0 8px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ position: 'relative' }}>
              <div 
                className="bg-holder bg-size" 
                style={{ 
                  backgroundImage: 'url(/assets/img/gallery/people.png)', 
                  backgroundPosition: 'top center', 
                  backgroundSize: 'contain' 
                }} 
              />
              <h1 className="text-center" style={{ position: 'relative', zIndex: 1, fontSize: '1.6rem', marginBottom: '4px' }}>
                CLINICAL CASES &amp; CAMPS / सफल उपचार व शिविर
              </h1>
              <p className="text-center text-secondary" style={{ position: 'relative', zIndex: 1, fontSize: '0.85rem', marginBottom: 0 }}>
                Interactive photo gallery of successful clinical treatments and community welfare initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid area — responsive grid layout */}
      <div style={{ height: containerHeight, padding: '0 8px 12px', boxSizing: 'border-box', width: '100%', minHeight: containerHeight === 'auto' ? (columns === 1 ? '1350px' : '700px') : 'none' }}>
        <ChromaGrid 
          items={items}
          radius={300}
          columns={columns}
          rows={rows}
          damping={0.4}
          fadeOut={0.5}
          ease="power2.out"
        />
      </div>
    </section>
  );
}
