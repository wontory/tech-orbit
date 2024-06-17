/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tech-orbit.wontory.dev',
        port: '',
        pathname: '/api',
      },
    ],
  },
}

export default nextConfig
