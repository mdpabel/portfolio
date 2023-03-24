import React from 'react';
import ProjectCard from './ProjectCard';
import Title from './Title';
import snakeImg from '../assets/snakge-game-mdpabel.jpg';

const projects = [
  {
    number: '01',
    top: '10%',
    title: 'Snake game',
    subTitle: 'Frontend application',
    imgUrl: snakeImg,
    description: `A snake game was created using React and JavaScript. A doubly linked list was utilized to enable efficient manipulation of the snake's movements and growth, resulting in a seamless and engaging gaming experience.`,
    technologies: ['Javascript', 'React', 'Doubly Linked list', 'use-sound'],
  },
];

const PersonalProjects = () => {
  return (
    <div className='mt-[150px] '>
      <Title className='sticky top-5'>Personal Projects</Title>
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
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
