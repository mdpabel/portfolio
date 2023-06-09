import Head from 'next/head';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import PersonalProjects from '@/components/PersonalProjects';
import Activities from '@/components/Activities';

function Home() {
  return (
    <>
      <Head>
        <title>MD Pabel</title>
        <meta name='description' content='Software engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='google-site-verification'
          content='NkaRsOj5K4MzvK2Yun0otP3LTs6Kyf9KeHgbQ3K1Xf0'
        />
      </Head>

      <div className='flex flex-col'>
        <Hero />
        <Skills />
        <Works />
        <PersonalProjects />
      </div>
    </>
  );
}

Home.layout = MainLayout;

export default Home;
