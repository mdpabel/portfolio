import React from 'react';
import ProjectImages from './ProjectImages';
import ProjectOverview from './ProjectOverview';

const Project = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-6xl px-8 mx-auto mt-[150px] justify-between '>
      <ProjectOverview
        title='Real time vehicle tracking system'
        subTitle='Full stack application'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        technologies={[
          'NodeJs',
          'ExpressJs',
          'React-native',
          'Redis',
          'IoT sensors',
          'socket.io',
        ]}
      />
      <ProjectImages
        images={[
          {
            url: './vehicle-tracker/1.png',
            speed: 30,
          },
          {
            url: './vehicle-tracker/2.png',
            speed: 5,
          },
          {
            url: './vehicle-tracker/3.png',
            speed: 3,
          },
          {
            url: './vehicle-tracker/4.png',
            speed: 4,
          },
        ]}
      />
    </div>
  );
};

export default Project;
