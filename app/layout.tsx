import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header-old';
import Footer from '../components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mdpabel.com/'),
  title: {
    default: 'MD Pabel',
    template: '%s | MD Pabel',
  },
  description:
    'Software developer and problem solver with a passion for building innovative solutions.',
  openGraph: {
    title: 'MD Pabel',
    description:
      'Software developer and problem solver with a passion for building innovative solutions.',
    url: 'https://www.mdpabel.com',
    siteName: 'MD Pabel',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'MD Pabel',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth	'>
      <head>
        <link
          rel='prefetch'
          href='https://www.mdpabel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme_2.0d2d691e.jpg&w=2048&q=75'
          as='image'
        />
        <link rel='prefetch' href='https://www.mdpabel.com/about' />
        <link rel='prefetch' href='https://www.mdpabel.com/notes' />
        <link rel='prefetch' href='https://www.mdpabel.com/contact' />
      </head>
      <body className={`${inter.className} bg-white/75 px-6 max-w-6xl mx-auto`}>
        <Header />
        <main className='min-h-[80vh]'>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
