import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['500', '700'] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <main className={inter.className}>
      <Header open={open} setOpen={setOpen} />
      <section
        onClick={() => setOpen(false)}
        style={{
          marginTop: '100px',
          marginBottom: '20px',
          minHeight: '70vh',
        }}
      >
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
