import React from 'react';
import Title from '@/components/ui/Title';
import Piller from './Piller';
import Skill from './Skill';

export const skillsArray = [
  {
    label: 'Java',
    level: '170px',
  },
  {
    label: 'Javascript',
    level: '200px',
  },
  {
    label: 'Typescript',
    level: '200px',
  },
  {
    label: 'Python',
    level: '165px',
  },
  {
    label: 'Docker',
    level: '170px',
  },
  {
    label: 'React.js',
    level: '190px',
  },
  {
    label: 'Next.js',
    level: '190px',
  },
  {
    label: 'Node.js',
    level: '165px',
  },
  {
    label: 'SQL',
    level: '165px',
  },
  {
    label: 'Mongodb',
    level: '145px',
  },
  {
    label: 'Git,Github',
    level: '145px',
  },
  {
    label: 'TailwindCSS',
    level: '200px',
  },
];

const Skills = ({ title }: { title: string }) => {
  return (
    <div className='relative flex flex-col justify-center items-center mx-auto mt-10 md:mt-15 pt-5 w-full max-w-6xl'>
      <Title>{title}</Title>

      {/* start  */}
      <div className='block relative lg:hidden w-full'>
        <ul className='flex w-full'>
          <li className='relative w-1/4 h-[580px] text-center'>
            <div className='mt-4 h-8 text-sm'>
              <strong>Uh? </strong>
            </div>
            <div className='left-0 absolute bg-gray-300 w-[1px] h-full'></div>
          </li>

          <li className='relative w-1/4 h-[580px] text-center'>
            <div className='mt-4 h-8 text-sm'>
              <strong>Basic</strong>
            </div>
            <div className='left-0 absolute bg-gray-300 w-[1px] h-full'></div>
          </li>

          <li className='relative w-1/4 h-[580px] text-center'>
            <div className='mt-4 h-8 text-sm'>
              <strong className='pr-4'>Medium</strong>
            </div>
            <div className='left-0 absolute bg-gray-300 w-[1px] h-full'></div>
          </li>

          <li className='relative w-1/4 h-[580px] text-center'>
            <div className='mt-4 h-8 text-sm'>
              <strong>High</strong>
            </div>
            <div className='left-0 absolute bg-gray-300 w-[1px] h-full'></div>
          </li>

          {/* <li className='relative w-1/5 h-[580px] text-center'>
            <div className='mt-4 h-8 text-sm'>
              <strong> master</strong> <br />
            </div>
            <div className='left-0 absolute bg-gray-300 w-[1px] h-full'></div>
          </li> */}
        </ul>

        <ul className='top-16 absolute space-y-3 w-full'>
          {skillsArray.map((item, index) => (
            <Piller
              level={item.level}
              label={item.label}
              index={index}
              key={index}
            />
          ))}
        </ul>
      </div>
      {/* end  */}

      <div className='lg:block relative hidden w-full max-w-4xl'>
        <ul className='w-full'>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-gray-900 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <span className='md:inline-block hidden'>I&apos;m the</span>
              <strong> master</strong> <br />
              <span className='md:inline-block hidden'>of the universe.</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-green-500 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>High</strong> <br />
              <span className='md:inline-block hidden'>
                I&apos;m pretty good.
              </span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-green-200 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Medium </strong>
              <span className='md:inline-block hidden'>I&apos;m trying</span>
              <br />
              <span className='md:inline-block hidden'>to improve.</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-yellow-500 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Basic </strong>
              <span className='md:inline-block hidden'>you can&apos;t </span>
              <br />
              <span className='md:inline-block hidden'>always win...</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='mt-4 md:mb-7 border-r-4 border-red-500 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Uh? </strong> <br />
              <span className='md:inline-block hidden'>Next question?</span>
            </span>
          </li>
        </ul>

        <ul className='bottom-4 left-0 absolute flex justify-between w-[75%]'>
          {skillsArray.map((item, index) => (
            <Skill
              level={item.level}
              label={item.label}
              index={index}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
