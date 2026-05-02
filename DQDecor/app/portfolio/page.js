export default function Portfolio() {
  const projects = [
    { title: 'Đám Cưới Thảo & Minh', category: 'Tiệc Cưới', img: 'https://images.unsplash.com/photo-1519741497674-611481863552' },
    { title: 'Lễ Gia Tiên Hồng Nhung', category: 'Gia Tiên', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622' },
    { title: 'Grand Opening - Luxury Spa', category: 'Sự Kiện', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3' },
    { title: 'Tiệc Cưới Garden Villa', category: 'Tiệc Cưới', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed' },
    { title: 'Sinh Nhật Bé Gia Bảo', category: 'Sinh Nhật', img: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15' },
    { title: 'Wedding - White Palace', category: 'Tiệc Cưới', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622' },
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="section-title">
          <h2>Dự Án Đã Thực Hiện</h2>
          <div></div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px',
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto'
        }}>
          {projects.map((project, i) => (
            <div key={i} className="portfolio-item" style={{ 
              position: 'relative', 
              height: '400px', 
              borderRadius: '10px', 
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div style={{ 
                backgroundImage: `url(${project.img}?q=80&w=800&auto=format&fit=crop)`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                transition: 'transform 0.5s ease'
              }} className="project-img"></div>
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                padding: '30px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'var(--white)'
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 'bold' }}>{project.category}</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '5px' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .portfolio-item:hover .project-img {
          transform: scale(1.1);
        }
      `}</style>
    </main>
  );
}
