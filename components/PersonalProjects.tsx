import React from 'react';
import ProjectCard from './ProjectCard';
import Title from './Title';
import snakeImg from '../assets/snakge-game-mdpabel.jpg';
import wordpresssecurites from '../assets/wordpresssecurities.jpg';
import Button from './Button';
import { ArrowUpRight } from './Icons';

const projects = [
  {
    number: '01',
    top: '10%',
    title: 'WordPress Securities',
    subTitle: 'Full stack application',
    imgUrl: wordpresssecurites,
    description: `The WordPressSecurities app, backed by a dedicated team of 20-25 experts, offers comprehensive security for blog sites with real-time threat detection, malware scanning, and vulnerability assessments.`,
    technologies: [
      'Typescript',
      'Next.js',
      'Mongodb',
      'Prisma',
      'Clerk Auth',
      'tailwindcss',
      'cloudinary',
      'quilljs',
    ],
    Button: (
      <Button href='https://www.wordpresssecurities.com/'>
        Live Link <ArrowUpRight />
      </Button>
    ),
  },
  {
    number: '02',
    top: '10%',
    title: 'Snake game',
    subTitle: 'Frontend application',
    imgUrl: snakeImg,
    description: `A doubly linked list was utilized to enable efficient manipulation of the snake's movements and growth, resulting in a seamless and engaging gaming experience.`,
    technologies: [
      'Javascript',
      'React',
      'Doubly Linked list',
      'use-sound',
      'tailwindcss',
    ],
    Button: (
      <Button href='https://snake-game-pi-amber.vercel.app/'>
        Live Link <ArrowUpRight />
      </Button>
    ),
  },
];

const PersonalProjects = () => {
  return (
    <div className='md:mt-[30px] max-w-[90%] mx-auto'>
      <Title className='md:sticky top-5'>Personal Projects</Title>
      <div>
        {projects.map((work, index) => (
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

export default PersonalProjects;
