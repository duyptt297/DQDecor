import './globals.css';

export const metadata = {
  title: 'DQDecor - Nghệ Thuật Trang Trí Sự Kiện Cao Cấp',
  description: 'Chuyên cung cấp dịch vụ trang trí tiệc cưới, gia tiên, rạp cưới và sự kiện chuyên nghiệp với thẩm mỹ tinh tế.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <nav className="glass-effect" style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          padding: '20px 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '2px' }}>
            DQDECOR
          </div>
          <div style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
            <a href="/">Trang chủ</a>
            <a href="/dich-vu">Dịch vụ</a>
            <a href="/portfolio">Dự án</a>
            <a href="/bao-gia" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Báo giá</a>
          </div>
        </nav>
        {children}
        <footer style={{ padding: '60px 5%', backgroundColor: 'var(--primary)', color: 'var(--white)' }}>
          <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent)' }}>DQDECOR</h3>
              <p style={{ opacity: 0.8 }}>Mang nghệ thuật vào không gian sự kiện của bạn. Đẳng cấp - Tinh tế - Khác biệt.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px' }}>Liên hệ</h4>
              <p>Email: contact@dqdecor.com</p>
              <p>Hotline: 09xx xxx xxx</p>
              <p>Địa chỉ: TP. Hồ Chí Minh</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', textAlign: 'center', opacity: 0.6 }}>
            © 2024 DQDecor. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
