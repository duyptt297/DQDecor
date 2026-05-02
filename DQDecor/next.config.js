/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'your-supabase-url.supabase.co'],
  },
};

module.exports = nextConfig;
