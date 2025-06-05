/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.pravatar.cc"],
  },
};

module.exports = nextConfig;
