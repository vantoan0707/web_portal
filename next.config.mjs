/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://nice-plant-00469a700.azurestaticapps.net' : undefined,
};

export default nextConfig;