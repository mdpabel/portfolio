import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';
import ServiceWorker from '../components/home/ServiceWorker';

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
      <head>
        <link
          rel='prefetch'
          href='https://www.mdpabel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme_2.0d2d691e.jpg&w=2048&q=75'
        />
        <link rel='prefetch' href='https://www.mdpabel.com/about' />
        <link rel='prefetch' href='https://www.mdpabel.com/notes' />
      </head>
      <body className={`${inter.className} bg-white/75 px-6 max-w-5xl mx-auto`}>
        <Header />
        <main className='min-h-[80vh]'>{children}</main>
        <Toaster />
        <ServiceWorker />
        <Footer />
      </body>
    </html>
  );
}
