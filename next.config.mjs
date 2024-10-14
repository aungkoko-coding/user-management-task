/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
      },
    ],
  },
  // experimental: {
  //   missingSuspenseWithCSRBailout: false, // this is not the best solution, we can wrap component in which it use useSearchParams in Suspense boundary
  // },
};

export default nextConfig;
