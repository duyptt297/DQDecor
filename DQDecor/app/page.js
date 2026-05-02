import { ArrowRight, Star, Heart, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p>Kinh nghiệm & Sự tinh tế</p>
          <h1>Biến Khoảnh Khắc Thành Tuyệt Tác</h1>
          <a href="/portfolio" className="btn-primary">Khám phá dự án <ArrowRight size={20} style={{ verticalAlign: 'middle', marginLeft: '8px' }} /></a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="section-title">
          <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '10px' }}>Chào mừng đến với DQDecor</p>
          <h2>Tâm Huyết Trong Từng Chi Tiết</h2>
          <div></div>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Tại DQDecor, chúng tôi tin rằng mỗi sự kiện là một câu chuyện riêng biệt. 
          Sứ mệnh của chúng tôi là hiện thực hóa giấc mơ của bạn thông qua ngôn ngữ của hoa, ánh sáng và sự sắp đặt tinh tế.
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="section-title">
          <h2>Dịch Vụ Của Chúng Tôi</h2>
          <div></div>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto'
        }}>
          {[
            { 
              title: 'Trang Trí Gia Tiên', 
              desc: 'Sự kết hợp giữa truyền thống và hiện đại cho ngày lễ trọng đại.',
              img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
            },
            { 
              title: 'Tiệc Cưới Nhà Hàng', 
              desc: 'Không gian tiệc cưới lộng lẫy, sang trọng và đầy cảm xúc.',
              img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop'
            },
            { 
              title: 'Sự Kiện & Sinh Nhật', 
              desc: 'Đánh dấu những cột mốc đáng nhớ với phong cách riêng biệt.',
              img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop'
            }
          ].map((service, i) => (
            <div key={i} className="glass-effect" style={{ borderRadius: '15px', overflow: 'hidden', transition: 'var(--transition-smooth)' }}>
              <div style={{ height: '250px', backgroundImage: `url(${service.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{service.desc}</p>
                <a href="/dich-vu" style={{ color: 'var(--accent)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Xem chi tiết <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div>
            <Heart size={40} color="var(--accent)" style={{ marginBottom: '20px' }} />
            <h4>Tận Tâm</h4>
            <p>Luôn lắng nghe và thấu hiểu mong muốn khách hàng.</p>
          </div>
          <div>
            <Star size={40} color="var(--accent)" style={{ marginBottom: '20px' }} />
            <h4>Chất Lượng</h4>
            <p>Sử dụng vật liệu cao cấp và hoa tươi tuyển chọn.</p>
          </div>
          <div>
            <Calendar size={40} color="var(--accent)" style={{ marginBottom: '20px' }} />
            <h4>Đúng Hẹn</h4>
            <p>Cam kết tiến độ và sự chỉn chu tuyệt đối.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        backgroundColor: 'var(--primary)', 
        color: 'var(--white)', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(6, 78, 59, 0.9), rgba(6, 78, 59, 0.9)), url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Sẵn Sàng Cho Sự Kiện Của Bạn?</h2>
        <p style={{ marginBottom: '40px', opacity: 0.9, fontSize: '1.2rem' }}>Hãy để DQDecor đồng hành cùng bạn tạo nên những kỷ niệm không thể quên.</p>
        <a href="/bao-gia" className="btn-primary" style={{ padding: '20px 60px' }}>Nhận Báo Giá Ngay</a>
      </section>
    </main>
  );
}
