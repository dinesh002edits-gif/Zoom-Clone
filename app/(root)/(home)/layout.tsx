import type { Metadata } from "next";
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import StreamVideoProvider from '@/providers/StreamClientProvider'; // <-- add this

export const metadata: Metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <StreamVideoProvider> {/* <-- wrap everything */}
        <Navbar />
        <div className="flex">
          <Sidebar />
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;