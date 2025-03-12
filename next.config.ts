import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prjcddvoddyxqvbjwsrm.supabase.co",
        pathname: "/storage/**",
        search: "",
        port: "",
      },
    ],
  },
};

export default nextConfig;
