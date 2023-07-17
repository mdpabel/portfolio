import React from 'react';
import Title from './Title';
import { SkillSM } from './piller';

const skillsArray = [
  {
    label: 'Javascript',
    level: '200px',
  },
  {
    label: 'Typescript',
    level: '180px',
  },
  {
    label: 'React',
    level: '190px',
  },
  {
    label: 'React Native',
    level: '140px',
  },
  {
    label: 'Node.js',
    level: '165px',
  },
  {
    label: 'Next.js',
    level: '190px',
  },

  {
    label: 'SQL',
    level: '165px',
  },
  {
    label: 'Git, Github',
    level: '145px',
  },
  {
    label: 'Express.js',
    level: '165px',
  },
  {
    label: 'Python',
    level: '165px',
  },
  {
    label: 'Mongodb',
    level: '145px',
  },
  {
    label: 'TailwindCSS, HTML, CSS',
    level: '200px',
  },
];

const genLeftPixels = (index: number) => {
  const n = skillsArray.length;
  return (100 / n) * index - 3 + '%';
};

const Skill = ({
  label,
  index,
  level,
}: {
  label: string;
  index: number;
  level: string;
}) => {
  return (
    <li
      className='absolute bottom-0 bar'
      style={{
        left: genLeftPixels(index),
      }}
    >
      <div className='w-8 h-2 bar-top top'></div>
      <div
        style={{
          height: level,
        }}
        className='w-10 border-l-8 bar-bg '
      ></div>
      <span
        style={{
          bottom:
            label === 'TailwindCSS, HTML, CSS'
              ? '-65px'
              : label === 'SQL'
              ? '-30px'
              : label === 'Python'
              ? '-38px'
              : label === 'Express.js'
              ? '-45px'
              : label === 'Node.js'
              ? '-40px'
              : label === 'Next.js'
              ? '-40px'
              : label === 'React'
              ? '-35px'
              : label === 'Typescript'
              ? '-45px'
              : label === 'Javascript'
              ? '-42px'
              : '-50px',
        }}
        className='absolute inline-block text-sm rotate-45 bottom-[-50px] left-2 text-gray-500'
      >
        {label}
      </span>
    </li>
  );
};

const Skills = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-6xl px-8 pt-5 mx-auto mt-10 md:mt-28'>
      <Title>My skills</Title>

      {/* start  */}
      <div className='relative block w-full lg:hidden'>
        <ul className='flex w-full'>
          <li className='h-[580px] w-1/5 text-center relative'>
            <div className='h-8 mt-4 text-sm'>
              <strong>Uh? </strong>
            </div>
            <div className='absolute w-[1px] h-full bg-gray-300 left-0'></div>
          </li>

          <li className='h-[580px] w-1/5 text-center relative'>
            <div className='h-8 mt-4 text-sm'>
              <strong>Basic</strong>
            </div>
            <div className='absolute w-[1px] h-full bg-gray-300 left-0'></div>
          </li>

          <li className='h-[580px] w-1/5 text-center relative'>
            <div className='h-8 mt-4 text-sm'>
              <strong className='pr-4'>Medium</strong>
            </div>
            <div className='absolute w-[1px] h-full bg-gray-300 left-0'></div>
          </li>

          <li className='h-[580px] w-1/5 text-center relative'>
            <div className='h-8 mt-4 text-sm'>
              <strong>High</strong>
            </div>
            <div className='absolute w-[1px] h-full bg-gray-300 left-0'></div>
          </li>

          <li className='h-[580px] w-1/5 text-center relative'>
            <div className='h-8 mt-4 text-sm'>
              <strong> master</strong> <br />
            </div>
            <div className='absolute w-[1px] h-full bg-gray-300 left-0'></div>
          </li>
        </ul>

        <ul className='absolute w-full space-y-3 top-16'>
          {skillsArray.map((item, index) => (
            <SkillSM
              level={item.level}
              label={item.label}
              index={index}
              key={index}
            />
          ))}
        </ul>
      </div>
      {/* end  */}

      <div className='relative hidden w-full max-w-4xl lg:block'>
        <ul className='w-full'>
          <li className='flex items-center justify-end w-full h-10 my-4 border-b'>
            <span className='w-[20%] h-8 mt-4 text-sm border-r-4 border-gray-900 md:w-1/4 md:mb-7'>
              <span className='hidden md:inline-block'>I&apos;m the</span>
              <strong> master</strong> <br />
              <span className='hidden md:inline-block'>of the universe.</span>
            </span>
          </li>
          <li className='flex items-center justify-end w-full h-10 my-4 border-b'>
            <span className='w-[20%] h-8 mt-4 text-sm border-r-4 border-green-500 md:w-1/4 md:mb-7'>
              <strong>High</strong> <br />
              <span className='hidden md:inline-block'>
                I&apos;m pretty good.
              </span>
            </span>
          </li>
          <li className='flex items-center justify-end w-full h-10 my-4 border-b'>
            <span className='w-[20%] h-8 mt-4 text-sm border-r-4 border-green-200 md:w-1/4 md:mb-7'>
              <strong className='pr-4'>Medium</strong>
              <span className='hidden md:inline-block'>I&apos;m trying</span>
              <br />
              <span className='hidden md:inline-block'>to improve.</span>
            </span>
          </li>
          <li className='flex items-center justify-end w-full h-10 my-4 border-b'>
            <span className='w-[20%] h-8 mt-4 text-sm border-r-4 border-yellow-500 md:w-1/4 md:mb-7'>
              <strong>Basic</strong>
              <span className='hidden md:inline-block'>you can&apos;t </span>
              <br />
              <span className='hidden md:inline-block'>always win...</span>
            </span>
          </li>
          <li className='flex items-center justify-end w-full h-10 my-4 border-b'>
            <span className='w-[20%] h-8 mt-4 text-sm border-r-4 border-red-500 md:w-1/4 md:mb-7'>
              <strong>Uh? </strong> <br />
              <span className='hidden md:inline-block'>Next question?</span>
            </span>
          </li>
        </ul>

        <ul className='absolute left-0 flex justify-between w-[75%] bottom-4'>
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
