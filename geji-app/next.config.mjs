/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: "export", // needed to create static bundle for Github pages
    reactStrictMode: true,
    // assetPrefix: process.env.NODE_ENV === 'production'? '/geji/' : undefined
};

export default nextConfig;
