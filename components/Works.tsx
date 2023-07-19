import React from 'react';
import ProjectCard from './ProjectCard';
import Title from './Title';
import Link from 'next/link';
import Button from './Button';
import { ArrowRight } from './Icons';
import TMMimg from '../assets/tmm.jpg';
import vehicleTracking from '../assets/vehicleTracking.png';
import MalwareRemoval from '../assets/MalwareRemoval.png';

const works = [
  {
    number: '01',
    top: '14%',
    title: 'TMMEmploy',
    subTitle: 'Full stack application',
    imgUrl: TMMimg,
    description:
      'A multi-vendor website for The Moving Movers, a hybrid moving company in California, The platform also facilitates the hiring process for employers and job seekers in the moving industry',
    technologies: [
      'Typescript',
      'NextJs',
      'Postgresql',
      'Prisma',
      'Next-auth',
      'pusher',
      'stripe',
      'Tailwindcss',
    ],
    Button: (
      <Button href='/case-studies/TMMEmploy'>
        View Case Study <ArrowRight />
      </Button>
    ),
  },
  {
    number: '02',
    top: '16%',
    title: 'Real time vehicle tracking system',
    subTitle: 'Full stack application',
    imgUrl: vehicleTracking,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    Button: (
      <Button href='/case-studies/real-time-vehicle-tracking-system'>
        View Case Study <ArrowRight />
      </Button>
    ),
  },

  {
    number: '03',
    top: '18%',
    title: 'Website Malware/Virus Removal',
    subTitle: 'Hacked/Infected Websites',
    imgUrl: MalwareRemoval,
    description:
      'Successfully removed malware/virus from over 800 client sites and more than 2200 websites across 41% of countries worldwide.',
    technologies: ['Javascript', 'PHP', 'SQL', 'cpanel', 'WordPress'],
    Button: (
      <Button disabled={true} href='/'>
        No Case study <ArrowRight />
      </Button>
    ),
  },
];

const Works = () => {
  return (
    <div className='mt-32 md:mt-[120px]  max-w-[90%] mx-auto'>
      <Title className='md:sticky top-2'>Works</Title>
      <div className='flex flex-col '>
        {works.map((work, index) => (
          <ProjectCard
            Button={work.Button}
            imgUrl={work.imgUrl}
            number={work.number}
            technologies={work.technologies}
            title={work.title}
            subTitle={work.subTitle}
            description={work.description}
            top={work.top}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
