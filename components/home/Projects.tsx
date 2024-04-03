import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/Icons';
import wordpresssecurities from '@/public/wordpresssecurities.jpg';
import vehicleTracking from '@/public/vehicleTracking.png';
import snakgeGame from '@/public/snakge-game.jpg';

const projects = [
  {
    number: '01',
    top: '10%',
    title: 'Next Gen WordPress',
    subTitle: 'Full stack application',
    imgUrl: wordpresssecurities,
    description: `nextgenwordpress.com is dedicated to providing top-notch WordPress Security and Development services.`,
    technologies: [
      'Typescript',
      'Next.js',
      'Mongodb',
      'Prisma',
      'Clerk Auth',
      'tailwindcss',
      'cloudinary',
      'zustand',
      'stripe',
      'pusher',
      'shadcn/ui',
      'headless wordpress',
      'contentful',
    ],
    liveLink: 'https://www.nextgenwordpress.com/',
    github: 'https://github.com/mdpabel/WordPressSecurities',
  },
  {
    number: '02',
    top: '16%',
    title: 'Real time vehicle tracking system',
    subTitle: 'Full stack application',
    imgUrl: vehicleTracking,
    description:
      'Real-time Vehicle Tracking is a fullstack application that enables users to track the real-time location of vehicles. ',
    technologies: [
      'Javascript',
      'NodeJs',
      'ExpressJs',
      'React-native',
      'Redis',
      'IoT sensors',
      'socket.io',
      'firebase',
    ],
    liveLink: 'https://github.com/mdpabel/Real-time-Vehicle-Tracking',
    github: 'https://github.com/mdpabel/Real-time-Vehicle-Tracking',
  },
  {
    number: '03',
    top: '10%',
    title: 'Snake game',
    subTitle: 'Frontend application',
    imgUrl: snakgeGame,
    description: `A doubly linked list was utilized to enable efficient manipulation of the snake's movements and growth, resulting in a seamless and engaging gaming experience.`,
    technologies: [
      'Javascript',
      'React',
      'Doubly Linked list',
      'use-sound',
      'tailwindcss',
    ],
    liveLink: 'https://snake-game-pi-amber.vercel.app/',
    github: 'https://github.com/mdpabel/snake-game',
  },
];

const Projects = () => {
  return (
    <div className='md:mt-[30px]'>
      <Title className='md:sticky top-5 mt-10'>Personal Projects</Title>
      <div>
        {projects.map((work, index) => (
          <ProjectCard
            imgUrl={work.imgUrl}
            number={work.number}
            technologies={work.technologies}
            title={work.title}
            subTitle={work.subTitle}
            description={work.description}
            top={work.top}
            key={index}
            github={work.github}
            liveLink={work.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardType {
  top: string;
  number: string;
  title: string;
  subTitle: string;
  description: string;
  imgUrl: string | StaticImageData;
  technologies: string[];
  liveLink: string;
  github: string;
}

const ProjectCard = ({
  top,
  number,
  title,
  subTitle,
  description,
  imgUrl,
  technologies,
  liveLink,
  github,
}: ProjectCardType) => {
  return (
    <div
      style={{
        top: top ? top : '10%',
        zIndex: parseInt(number) * 10,
      }}
      className='bg-white/50 px-6 md:px-8 backdrop-blur-3xl flex md:pl-20 py-6 md:py-8 md:sticky rounded-2xl gap-4 flex-col md:flex-row max-w-5xl mx-auto md:max-h-[80vh] my-10 justify-between shadow-sm border'>
      <div className='flex flex-col justify-between w-full space-y-4 md:w-1/2 '>
        <h2 className='text-2xl font-medium text-gray-600'>{number}</h2>
        <div className='space-y-3 '>
          <h2 className='inline-block text-gray-600 font-medium text-2xl md:text-3xl tracking-[-1.25px] '>
            {title}
          </h2>
          <h3 className='font-medium text-gray-700'>{subTitle}</h3>
        </div>
        <div className='space-y-4'>
          <p className='text-base leading-normal text-paragraph'>
            {description}
          </p>
          <div className='space-x-3 md:space-x-4'>
            <Button asChild>
              <Link target='_blank' href={liveLink}>
                Live Link <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild>
              <Link target='_blank' href={github}>
                Github <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <ul className='flex flex-wrap pt-4 text-sm list-disc list-inside gap-x-4 text-paragraph'>
          {technologies.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center w-full md:w-1/2'>
        <Image src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default Projects;
