import React from 'react';
import ProjectCard from './ProjectCard';
import Title from './Title';

const works = [
  {
    number: '01',
    top: '10%',
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
  },
  {
    number: '02',
    top: '12%',
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
  },
];

const Works = () => {
  return (
    <div className='mt-[150px] '>
      <Title className='sticky top-5'>Works</Title>
      <div>
        {works.map((work, index) => (
          <ProjectCard
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
