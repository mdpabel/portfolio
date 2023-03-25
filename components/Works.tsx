import React from 'react';
import ProjectCard from './ProjectCard';
import Title from './Title';
import Link from 'next/link';
import Button from './Button';

const works = [
  {
    number: '01',
    top: '14%',
    title: 'TMMEmploy',
    subTitle: 'Full stack application',
    imgUrl:
      'https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ-p-500.png',
    description:
      'A multi-vendor website for The Moving Movers, a hybrid moving company in California, The platform also facilitates the hiring process for employers and job seekers in the moving industry',
    technologies: [
      'Typescript',
      'NextJs',
      'Postgresql',
      'Prisma',
      'Next-auth',
      'pusher',
    ],
    Button: <Button href='/'>View Case Study</Button>,
  },
  {
    number: '02',
    top: '16%',
    title: 'Real time vehicle tracking system',
    subTitle: 'Full stack application',
    imgUrl:
      'https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ-p-500.png',
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
    ],
    Button: <Button href='/'>View Case Study</Button>,
  },
];

const Works = () => {
  return (
    <div className='mt-[150px]  max-w-[90%] mx-auto'>
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
