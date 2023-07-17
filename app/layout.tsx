import Header from '@/components/Header';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
      <body className={inter.className}>
        <main className={inter.className}>
          <Header />
          <section
            style={{
              marginTop: '20px',
              marginBottom: '20px',
              minHeight: '70vh',
            }}
          >
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}