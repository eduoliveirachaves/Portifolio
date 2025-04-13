import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/**"
      },
      {
        protocol: "https",
        hostname: "vitejs.dev",
        port: "",
        pathname: "/logo.svg"
      },
      {
        protocol: "https",
        hostname: "www.prisma.io",
        port: "",
        pathname: "/images/logo.svg"
      },
      {
        protocol: "https",
        hostname: "www.postgresql.org",
        port: "",
        pathname: "/wikipedia/commons/**"
      },
      {
        protocol: "https",
        hostname: "spring.io",
        port: "",
        pathname: "/images/logo-spring-2020.svg"
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/wikipedia/commons/**"
      },
      {
        protocol: "https",
        hostname: "react.dev",
        port: "",
        pathname: "/wikipedia/commons/**"
      },
      {
        protocol: "https",
        hostname: "hibernate.org",
        port: "",
        pathname: "/wikipedia/commons/**"
      },
      {
        protocol: "https",
        hostname: "assets.ubuntu.com",
        port: "",
        pathname: "/v1/images/ubuntu-logo.svg"
      },
      {
        protocol: "https",
        hostname: "developer.mozilla.org",
        port: "",
        pathname: "/en-US/docs/Web/**"
      },
      {
        protocol: "https",
        hostname: "swagger.io",
        port: "",
        pathname: "/wikipedia/commons/**"
      },
      {
        protocol: "https",
        hostname: "assets.ubuntu.com",
        port: "",
        pathname: "/v1/29985a98-ubuntu-logo32.png"
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/v2/resize:fit:1400/**"
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        port: "",
        pathname: "/assets.00/swagger-icon-2048x2048-563qbzey.png"
      },
      {
        protocol: "https",
        hostname: "prismalens.vercel.app",
        port: "",
        pathname: "/header/logo-white.svg"
      },
      {
        protocol: "https",
        hostname: "download.logo.wine",
        port: "",
        pathname: "/logo/**"
      },
      {
        protocol: "https",
        hostname: "logowik.com",
        port: "",
        pathname: "/content/uploads/images/express-js1720895493.logowik.com.webp"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "**"
      },


    ]
  }
};

export default nextConfig;

