import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={inter.className}>
      <Header />
      <section
        style={{
          marginTop: '100px',
          marginBottom: '100px',
        }}
      >
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
