/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/shakil/agro_finder/**",
      },
    ],
  },
  api: {
    bodyParser: true,
  },
};

module.exports = nextConfig;
