/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "plus.unsplash.com",
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;