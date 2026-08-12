import { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Inter } from "next/font/google"; // add this for pro font

const inter = Inter({ subsets: ["latin"] }); // add this

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className={`${inter.className} bg-gray-50 min-h-screen`}> {/* <- add bg-gray-50 here */}
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;