/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery is local in /public; allow modern formats.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
