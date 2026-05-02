'use client';
import { supabase } from '@/lib/supabase';
import { LogIn } from 'lucide-react';

export default function Login() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/admin`
      }
    });
    if (error) console.error('Error logging in:', error.message);
  };

  return (
    <main style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-secondary)',
      padding: '20px'
    }}>
      <div className="glass-effect" style={{ 
        padding: '50px', 
        borderRadius: '20px', 
        maxWidth: '450px', 
        width: '100%', 
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '10px' }}>DQDECOR</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Quản trị hệ thống DQDecor</p>
        
        <button 
          onClick={handleGoogleLogin}
          style={{ 
            width: '100%', 
            padding: '15px', 
            backgroundColor: 'var(--white)', 
            border: '1px solid #ddd',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '1rem',
            fontWeight: '600'
          }}
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" style={{ width: '20px' }} />
          Đăng nhập với Google
        </button>
        
        <div style={{ marginTop: '30px' }}>
          <a href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>← Quay lại trang chủ</a>
        </div>
      </div>
    </main>
  );
}
