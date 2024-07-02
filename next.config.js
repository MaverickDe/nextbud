/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
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
