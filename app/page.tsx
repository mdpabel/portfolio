import { getNotes } from '@/utils/notes';
import Experience from '../components/home/Experience';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Notes from '@/components/note/Notes';
import Title from '@/components/ui/Title';
import Link from 'next/link';

export default async function Home() {
  const notes = (await getNotes()).slice(0, 5);

  return (
    <div className='flex flex-col pt-12 md:pt-20'>
      <Hero />
      <Skills title='My skills' />
      <Experience />
      <Projects />
      <div className='space-y-8 pb-10'>
        <Title>Recent Notes</Title>
        <Notes notes={notes} />
        <Link className='inline-block underline' href='/notes'>
          All Notes
        </Link>
      </div>
    </div>
  );
}
