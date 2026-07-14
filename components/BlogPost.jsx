"use client";

function AchievementCard({ title, category, date, description, imageName }) {
  return (
    <div className="col-sm-6 col-lg-3 mb-4">
      <div 
        className="card h-100 shadow-sm card-span rounded-3"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(13, 59, 67, 0.1)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 59, 67, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(71, 57, 27, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
          e.currentTarget.style.borderColor = 'rgba(13, 59, 67, 0.1)';
        }}
      >
        <div 
          className="d-flex align-items-center justify-content-center"
          style={{ 
            height: '280px', 
            background: 'linear-gradient(135deg, #E3EEF4 0%, #d4e4ea 100%)',
            borderBottom: '4px solid #47391B'
          }}
        >
          <img 
            className="img-fluid" 
            src={`/assets/img/client/${imageName}.jpg`} 
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = `/assets/img/client/${imageName}.svg`;
            }} 
            alt={title}
            style={{ 
              maxHeight: '250px', 
              maxWidth: '90%',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
            }} 
          />
        </div>
        <div className="card-body p-5" style={{ minHeight: '240px' }}>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span 
              className="badge fw-bold px-3 py-2"
              style={{ 
                background: '#47391B', 
                color: '#fff',
                fontSize: '11px',
                letterSpacing: '0.5px'
              }}
            >
              {category}
            </span>
            <span 
              className="fs--2 fw-bold"
              style={{ color: '#0D3B43' }}
            >
              {date}
            </span>
          </div>
          <h5 
            className="font-base mb-3 fw-bold"
            style={{ 
              color: '#0D3B43', 
              fontSize: '1.35rem',
              lineHeight: '1.3'
            }}
          >
            {title}
          </h5>
          <p 
            className="mb-0"
            style={{ 
              color: '#5a6c72', 
              fontSize: '16px',
              lineHeight: '1.5'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogPost() {
  const achievements = [
    {
      title: 'Homeopathy Youth Icon Award',
      category: 'National Award',
      date: 'Jan 2024',
      description: 'Honored for outstanding contributions to homeopathic practice and social service in Northern India.',
      imageName: 'award-youth-icon'
    },
    {
      title: 'Social Worker Recognition UP',
      category: 'State Honor',
      date: 'Nov 2023',
      description: 'Recognized by regional boards for arranging free rural health check-up camps and wellness seminars.',
      imageName: 'award-camp'
    },
    {
      title: 'BNI Excellence Recognition',
      category: 'Credential',
      date: 'Mar 2021',
      description: 'Recognized for building outstanding healthcare networks and reliable consultation practices in Varanasi.',
      imageName: 'award-bni'
    },
    {
      title: 'Corona Warrior Certificate',
      category: 'Public Service',
      date: 'Sep 2020',
      description: 'Awarded for delivering relentless outpatient consultation services during the COVID-19 pandemic.',
      imageName: 'award-corona'
    }
  ];

  return (
    <section className="snap-section" id="achievements" style={{ position: 'relative', background: '#f7fafc' }}>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3" style={{ position: 'relative' }}>
              <div 
                className="bg-holder bg-size" 
                style={{ 
                  backgroundImage: 'url(/assets/img/gallery/blog-post.png)', 
                  backgroundPosition: 'top center', 
                  backgroundSize: 'contain',
                  opacity: 0.15
                }} 
              />
              <h1 
                className="text-center fw-bold" 
                style={{ 
                  position: 'relative', 
                  zIndex: 1,
                  color: '#0D3B43',
                  fontSize: '2.5rem',
                  letterSpacing: '1px'
                }}
              >
                ACHIEVEMENTS & CREDENTIALS / उपलब्धियां
              </h1>
              <p 
                className="text-center fs-5 mt-2" 
                style={{ 
                  position: 'relative', zIndex: 1,
                  color: '#47391B',
                  fontWeight: '600'
                }}
              >
                Awards, certificates, and community service impact milestones.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2" style={{ position: 'relative' }}>
        <div 
          className="bg-holder bg-size" 
          style={{ 
            backgroundImage: 'url(/assets/img/gallery/dot-bg.png)', 
            backgroundPosition: 'top left', 
            backgroundSize: 'auto',
            opacity: 0.08
          }} 
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            {achievements.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
