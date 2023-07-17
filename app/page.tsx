import Hero from '@/components/Hero';
import PersonalProjects from '@/components/PersonalProjects';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col pt-12 md:pt-20'>
      <Hero />
      <Skills />
      <Works />
      <PersonalProjects />
    </div>
  );
}
