import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://macquarie-construction.vercel.app'),
  title: {
    default: 'Macquarie Engineering & Construction',
    template: '%s | Macquarie Engineering & Construction',
  },
  description: 'From Concept to Completion — Built with Precision, Delivered with Integrity. Premium engineering and construction services in Australia.',
  keywords: ['Construction', 'Engineering', 'Australia', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'],
  authors: [{ name: 'Macquarie Engineering & Construction' }],
  creator: 'Macquarie Engineering & Construction',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://macquarie-construction.vercel.app',
    title: 'Macquarie Engineering & Construction',
    description: 'From Concept to Completion — Built with Precision, Delivered with Integrity.',
    siteName: 'Macquarie Engineering & Construction',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Macquarie Engineering & Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macquarie Engineering & Construction',
    description: 'From Concept to Completion — Built with Precision, Delivered with Integrity.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
