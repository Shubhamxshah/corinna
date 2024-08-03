/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ucarecdn.com',
        },
        {
          protocol: 'https',
          hostname: 'wordpress-1309329-4774556.cloudwaysapps.com',
        },
      ],
    },
  }
  
  export default nextConfig
  