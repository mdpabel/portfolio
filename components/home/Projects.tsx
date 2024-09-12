import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/Icons';
import wordpresssecurities from '@/public/wordpresssecurities.jpg';
import vehicleTracking from '@/public/vehicleTracking.png';
import threeZero from '@/public/3zero.png';
import snakgeGame from '@/public/snakge-game.jpg';
import authProjectImg from '@/public/fullstack-auth.png';

const projects = [
  {
    number: '01',
    top: '10%',
    title: '3zero Digital',
    subTitle: 'Full stack application',
    imgUrl: threeZero,
    description: `A full-stack platform built to deliver digital solutions with zero vulnerabilities, zero downtime, and zero errors, focusing on security and scalability.`,
    technologies: [
      'Typescript',
      'Next.js',
      'Mongodb',
      'Prisma',
      'Clerk Auth',
      'tailwindcss',
      'swell',
      'shadcn/ui',
      'headless wordpress',
      'stripe',
      'resend',
      'react-email',
    ],
    liveLink: 'https://www.3zerodigital.com/',
    github: 'https://github.com/mdpabel/3zero-digital',
  },
  {
    number: '02',
    top: '12%',
    title: 'Next Gen WordPress',
    subTitle: 'Full stack application',
    imgUrl: wordpresssecurities,
    description: `A comprehensive solution offering premium WordPress security and development services to ensure high-performance and secure websites.`,
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
    number: '03',
    top: '14%',
    title: 'Real time vehicle tracking system',
    subTitle: 'IoT based Full stack application',
    imgUrl: vehicleTracking,
    description:
      'A real-time vehicle tracking platform that utilizes IoT sensors and live data streams to provide accurate vehicle locations and movement history.',
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
    number: '04',
    top: '16%',
    title: 'Snake game',
    subTitle: 'Frontend application',
    imgUrl: snakgeGame,
    description: `A fun and interactive snake game built with React, featuring smooth movements powered by a doubly linked list for efficient growth and control.`,
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
  {
    number: '05',
    top: '18%',
    title: 'Full stack authentication',
    subTitle: 'Full stack application',
    imgUrl: authProjectImg,
    description: `A full-stack authentication system built with secure email-password login, featuring real-time email verification, password recovery, and role-based access control.`,
    technologies: [
      'Typescript',
      'Next.js',
      'Prisma',
      'bcryptjs',
      'jose',
      'next-auth',
      'react-hook-form',
      'resend',
      'tailwindcss',
    ],
    liveLink: 'https://next-authentication-xi.vercel.app/signup',
    github: 'https://github.com/mdpabel/Next-authentication',
  },
];

const Projects = () => {
  return (
    <div className='md:mt-[30px]'>
      <Title className='top-5 md:sticky mt-10'>Personal Projects</Title>
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
      className='md:sticky flex md:flex-row flex-col justify-between gap-4 bg-white/50 shadow-sm backdrop-blur-3xl mx-auto my-10 px-6 md:px-8 py-6 md:py-8 md:pl-20 border rounded-2xl max-w-5xl md:max-h-[80vh]'>
      <div className='flex flex-col justify-between space-y-4 w-full md:w-1/2'>
        <h2 className='font-medium text-2xl text-gray-600'>{number}</h2>
        <div className='space-y-3'>
          <h2 className='inline-block font-medium text-2xl text-gray-600 md:text-3xl tracking-[-1.25px]'>
            {title}
          </h2>
          <h3 className='font-medium text-gray-700'>{subTitle}</h3>
        </div>
        <div className='space-y-4'>
          <p className='text-base text-paragraph leading-normal'>
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
        <ul className='flex flex-wrap gap-x-4 pt-4 text-paragraph text-sm list-disc list-inside'>
          {technologies.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <Image src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default Projects;
