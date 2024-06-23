/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
       unoptimized :true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
    },
    output: "export",
}

module.exports = nextConfig
