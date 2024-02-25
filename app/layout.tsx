import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/Toaster';
import ServiceWorker from './ServiceWorker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://wordpresssecurities.com'),
  title: 'MD Pabel - Software Developer',
  description:
    'Software developer and problem solver with a passion for building innovative solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white/75 px-6 max-w-6xl mx-auto`}>
        <Header />
        <main className='min-h-[80vh]'>{children}</main>
        <Toaster />
        <ServiceWorker />
        <Footer />
      </body>
    </html>
  );
}
