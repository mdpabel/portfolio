import {
  AcademicCap,
  CVIcon,
  CodeForces,
  GithubIcon,
  HackerRank,
  LeetCodeIcon,
  LocationIcon,
  ReplItIcon,
  StackblitzIcon,
} from '@/components/ui/Icons';
import { cvLink } from '@/data';
import Link from 'next/link';

function Hero() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full overflow-visible text-center '>
      <h1 className='inline-block text-transparent bg-clip-text font-bold text-5xl md:text-7xl tracking-[-1.25px] black-gradient'>
        Hi, I&#x27;m Pabel.
      </h1>
      <div className='flex justify-center my-6 space-x-2 font-medium text-paragraph'>
        <LocationIcon />
        <div className=''>Cumilla, BD</div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='max-w-lg mx-8 space-x-2 paragraphSize md:mx-auto text-paragraph'>
          Computer Science Graduate, Software developer, Problem solver,
          passionate about creating experiences. Skilled in malware detection
          <AcademicCap />
        </div>
      </div>
      <div className='flex space-x-4 md:space-x-6 pt-10'>
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='leetcode profile'
          target='_blank'
          href='https://leetcode.com/mdpabel/'>
          <LeetCodeIcon />
        </Link>
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='github profile'
          target='_blank'
          href='https://github.com/mdpabel'>
          <GithubIcon />
        </Link>
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='hackerrank profile'
          target='_blank'
          href='https://www.hackerrank.com/mdpabel385'>
          <HackerRank />
        </Link>
        {/* <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='codeforces profile'
          target='_blank'
          href='https://codeforces.com/profile/MD_Pabel'>
          <CodeForces />
        </Link> */}
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='stackblitz profile'
          target='_blank'
          href='https://stackblitz.com/@mdpabel'>
          <StackblitzIcon />
        </Link>
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='codeforces profile'
          target='_blank'
          href='https://replit.com/@MDPabel?tab=repls'>
          <ReplItIcon />
        </Link>
        <Link
          className='transition-transform hover:scale-[1.2] duration-150 '
          aria-label='Open Resume'
          target='_blank'
          href={cvLink}>
          <CVIcon />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
