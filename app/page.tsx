import { getNotes } from '@/utils/notes';
import Experience from '../components/home/Experience';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Title from '@/components/ui/Title';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// const Notes = dynamic(() => import('@/components/note/Notes'));

export default async function Home() {
  return (
    <div className='flex flex-col pt-12 md:pt-20'>
      <Hero />
      <Skills title='My skills' />
      <Experience />
      <Projects />
    </div>
  );
}
