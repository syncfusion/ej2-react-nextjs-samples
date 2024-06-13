/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/fluent2/grid/overview',
                permanent: true,
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
