# DQDecor - Premium Event Decoration Platform

DQDecor là một nền tảng quản lý và giới thiệu dịch vụ trang trí sự kiện cao cấp, được xây dựng với mục tiêu mang lại trải nghiệm tinh tế cho khách hàng và sự tiện lợi cho nhà quản trị.

## 🌟 Tính năng nổi bật

- **Giao diện Sang trọng**: Thiết kế hiện đại, tối ưu trải nghiệm người dùng (UX) với phong cách Premium.
- **Portfolio Chuyên nghiệp**: Trưng bày các dự án đã thực hiện với hiệu ứng hình ảnh sống động.
- **Hệ thống Quản trị (Admin)**: Dashboard theo dõi yêu cầu báo giá, doanh thu và quản lý đơn hàng.
- **Xác thực Bảo mật**: Đăng nhập bằng Google OAuth thông qua Supabase.
- **Hiệu năng Cao**: Xây dựng trên nền tảng Next.js 14 mới nhất.

## 🛠 Công nghệ sử dụng (Tech Stack)

- **Frontend**: Next.js (App Router), React, Lucide React.
- **Styling**: Vanilla CSS (Custom Design System).
- **Backend & Database**: Supabase (PostgreSQL).
- **Authentication**: Supabase Auth (Google Login).

## 🚀 Hướng dẫn cài đặt

### 1. Yêu cầu hệ thống
- Node.js 18.x trở lên.
- Tài khoản Supabase (miễn phí).

### 2. Cài đặt các thư viện
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo tệp `.env.local` tại thư mục gốc và điền các thông tin từ Supabase Project của bạn:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Chạy dự án
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## 📈 Lộ trình phát triển (Roadmap)

- [x] **Phase 1**: Khởi tạo nền tảng, Landing Page & Admin Dashboard cơ bản.
- [ ] **Phase 2**: Hệ thống đặt lịch trực tuyến & Phân quyền chi tiết (Staff/Admin).
- [ ] **Phase 3**: Tích hợp AI báo giá tự động & Hệ thống thông báo SMS/Email.

## 📄 Giấy phép
Dự án được phát hành dưới giấy phép MIT.

---
© 2024 **DQDecor**. All rights reserved.
