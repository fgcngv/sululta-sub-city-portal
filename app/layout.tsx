


import type { Metadata } from 'next'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from '@/components/layout/site-header';
import { Toaster } from "sonner";
import { LanguageProvider } from './providers/language-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sululta Sub-City Portal',
  description: 'This Portal is built by sululta science and technology office',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
      <LanguageProvider>
        <ClerkProvider>
          <header className=" ">
          </header>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ClerkProvider>
        <Toaster position="top-right" richColors closeButton />
        </LanguageProvider>
      </body>
    </html>
  )
}