/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env['github.workspace'] ? "export": undefined, // needed to create static bundle for Github pages
    reactStrictMode: true,
    assetPrefix: process.env['github.workspace'] ? '/geji/' : undefined
};

export default nextConfig;
