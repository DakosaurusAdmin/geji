/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "geji-app", // needed to set build directory for Github pages
    output: "export", // needed to create static bundle for Github pages
    reactStrictMode: true,
};

export default nextConfig;
