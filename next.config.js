/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nextjs/demos',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/material3/grid/overview',
                permanent: true,
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
