import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo3.png",
  },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative"> 
      {children}
    </main>
  );
};

export default HomeLayout;