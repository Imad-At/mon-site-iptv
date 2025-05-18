/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    // ✅ C'est ici qu'on autorise d'autres origines (ex : accès mobile)
    allowedDevOrigins: ['http://192.168.11.115:3000'], // remplace par ton IP locale
  };
  
  module.exports = nextConfig;
  