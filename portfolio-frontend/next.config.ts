import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https', // Cloudinary usa HTTPS
        hostname: 'res.cloudinary.com',
        port: '', // Puerto estándar para HTTPS, no es necesario especificarlo
        pathname: '/**', // Permite cualquier ruta de imagen bajo este hostname
      },
    ],
  }
};

export default nextConfig;
