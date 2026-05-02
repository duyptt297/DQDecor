'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { LayoutDashboard, ShoppingCart, Image as ImageIcon, Users, Settings, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  // Sidebar Component
  const Sidebar = () => (
    <div style={{ 
      width: '280px', 
      backgroundColor: 'var(--primary)', 
      color: 'var(--white)', 
      height: '100vh',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h2 style={{ color: 'var(--accent)', marginBottom: '50px', letterSpacing: '2px' }}>DQDECOR</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {[
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
          { icon: <ShoppingCart size={20} />, label: 'Đơn hàng' },
          { icon: <ImageIcon size={20} />, label: 'Portfolio' },
          { icon: <Users size={20} />, label: 'Người dùng' },
          { icon: <Settings size={20} />, label: 'Cài đặt' },
        ].map((item, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
            cursor: 'pointer'
          }}>
            {item.icon} <span>{item.label}</span>
          </div>
        ))}
      </nav>
      <button onClick={handleLogout} style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px', 
        padding: '15px', 
        color: '#ff6b6b' 
      }}>
        <LogOut size={20} /> <span>Đăng xuất</span>
      </button>
    </div>
  );

  return (
    <div style={{ display: 'flex', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2rem' }}>Tổng quan hệ thống</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>Chào, <strong>Admin</strong></span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {[
            { label: 'Yêu cầu mới', value: '12', color: '#3b82f6' },
            { label: 'Dự án đang làm', value: '5', color: '#10b981' },
            { label: 'Doanh thu tháng', value: '150M', color: '#f59e0b' },
            { label: 'Feedback tốt', value: '98%', color: '#8b5cf6' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '30px', backgroundColor: 'var(--white)', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>{stat.label}</p>
              <h3 style={{ fontSize: '2.5rem', color: stat.color }}>{stat.value}</h3>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', backgroundColor: 'var(--white)', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '20px' }}>Yêu cầu báo giá gần đây</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                <th style={{ padding: '15px' }}>Khách hàng</th>
                <th style={{ padding: '15px' }}>Dịch vụ</th>
                <th style={{ padding: '15px' }}>Ngày tổ chức</th>
                <th style={{ padding: '15px' }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Nguyễn Văn A', service: 'Trang trí Gia Tiên', date: '20/05/2024', status: 'Chờ xử lý' },
                { name: 'Trần Thị B', service: 'Tiệc Cưới Garden', date: '25/05/2024', status: 'Đang khảo sát' },
                { name: 'Lê Văn C', service: 'Sự kiện Khai trương', date: '01/06/2024', status: 'Hoàn thành' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f9fafb' }}>
                  <td style={{ padding: '15px' }}>{row.name}</td>
                  <td style={{ padding: '15px' }}>{row.service}</td>
                  <td style={{ padding: '15px' }}>{row.date}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      padding: '5px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem',
                      backgroundColor: row.status === 'Hoàn thành' ? '#d1fae5' : '#fef3c7',
                      color: row.status === 'Hoàn thành' ? '#065f46' : '#92400e'
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
