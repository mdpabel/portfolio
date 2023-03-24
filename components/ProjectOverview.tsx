import React from 'react';

interface PropType {
  title: string;
  subTitle: string;
  description: string;
  technologies: string[];
}

const ProjectOverview = ({
  title,
  subTitle,
  description,
  technologies,
}: PropType) => {
  return (
    <div className='flex sticky top-5 md:top-[10%] h-[40vh] md:h-[80vh] flex-col justify-between w-full md:w-2/5 '>
      <h2 className='text-3xl font-medium text-gray-600'>01</h2>
      <div className='flex flex-col space-y-4 gap-y-4'>
        <h2 className='inline-block text-gray-600 font-bold text-2xl md:text-5xl  tracking-[-1.25px] '>
          {title}
        </h2>
        <div className='space-y-2'>
          <h3 className='font-semibold text-gray-600'>{subTitle}</h3>
          <p className='text-base font-medium'>{description}</p>
        </div>
      </div>

      <ul className='flex flex-wrap text-sm list-disc list-inside gap-x-4'>
        {technologies.map((label, index) => (
          <li key={index} className=''>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOverview;
