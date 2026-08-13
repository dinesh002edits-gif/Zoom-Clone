import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo3.png",
  },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default HomeLayout;