import Background from './Background';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className='flex flex-col pt-12 md:pt-20'>
      <Hero />
      <Skills title='My skills' />
      <Experience />
      <Projects />
    </div>
  );
}
