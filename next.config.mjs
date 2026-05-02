/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/preis',
        destination: '/#quote-form',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/#quote-form',
        permanent: true,
      },
      {
        source: '/reinigung',
        destination: '/',
        permanent: true,
      },
      {
        source: '/reinigung/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
