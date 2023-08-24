/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com'],
        unoptimized: true,
    },
    output: 'export',
};

module.exports = nextConfig;
