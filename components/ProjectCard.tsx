import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ProjectCardType {
  top: string;
  number: string;
  title: string;
  subTitle: string;
  description: string;
  imgUrl: string | StaticImageData;
  technologies: string[];
}

const ProjectCard = ({
  top,
  number,
  title,
  subTitle,
  description,
  imgUrl,
  technologies,
}: ProjectCardType) => {
  return (
    <div
      style={{
        backgroundColor: '#f1f0f0',
        top: top ? top : '10%',
      }}
      className='flex px-10 md:p-20 sticky top-[10%] rounded-2xl gap-4 flex-col-reverse md:flex-row max-w-6xl mx-auto max-h-[80vh] mt-20 justify-between shadow-sm border'
    >
      <div className='flex space-y-4 flex-col w-full md:w-1/2 justify-between  '>
        <h2 className='text-3xl font-medium text-gray-600'>{number}</h2>
        <div className='space-y-3 '>
          <h2 className='inline-block text-gray-500 font-bold text-2xl md:text-5xl  tracking-[-1.25px] '>
            {title}
          </h2>
          <h3 className='font-semibold text-gray-600'>{subTitle}</h3>
        </div>
        <div className='space-y-4'>
          <p className='paragraphSize text-paragraph text-sm leading-normal'>
            {description}
          </p>
          <button
            style={{
              backgroundColor: '#dfdfdf',
            }}
            className='bg-gray-50 px-4 py-2 rounded-md text-paragraph'
          >
            View Case Study
          </button>
        </div>
        <ul className='flex flex-wrap text-sm list-disc list-inside gap-x-4 text-paragraph'>
          {technologies.map((label, index) => (
            <li key={index} className=''>
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full md:w-1/2'>
        <Image width={400} height={400} src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
