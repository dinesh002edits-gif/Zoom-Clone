import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import StreamVideoProvider from '@/providers/StreamClientProvider'


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
  afterSignInUrl="/"
  afterSignUpUrl="/"
    >
      <html lang="en">
        <body className={`${inter.className} bg-gray-50 min-h-screen`}>
          <StreamVideoProvider>
            {children}
          </StreamVideoProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}