import { getNotes } from '@/utils/notes';
import Experience from '../components/home/Experience';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';

export const dynamic = 'force-static';
export const runtime = 'edge';

export default async function Home() {
  getNotes();

  return (
    <div className='flex flex-col pt-12 md:pt-20'>
      <Hero />
      <Skills title='My skills' />
      <Experience />
      <Projects />
    </div>
  );
}
