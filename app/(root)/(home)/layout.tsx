import type { Metadata } from "next";
import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import StreamVideoProvider from '@/providers/StreamClientProvider'

export const metadata: Metadata = {
  title: 'YOOM',
  description: 'A workspace for your team, powered by Stream',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider
  afterSignInUrl="/"
  afterSignUpUrl="/"
>
      <main className="relative">
        <StreamVideoProvider> 
          <Navbar />
          <div className="flex">
            <Sidebar />
            <section className="flex min-h-screen flex-1 flex-col">
              <div className="w-full">{children}</div>
            </section>
          </div>
        </StreamVideoProvider>
      </main>
    </ClerkProvider>
  );
};

export default RootLayout;