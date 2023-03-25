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
      className='flex px-10 md:px-20 py-10 md:sticky rounded-2xl gap-4 flex-col md:flex-row max-w-6xl mx-auto md:max-h-[80vh] my-10 justify-between shadow-sm border'
    >
      <div className='flex flex-col justify-between w-full space-y-4 md:w-2/3 '>
        <h2 className='text-2xl font-medium text-gray-600'>{number}</h2>
        <div className='space-y-3 '>
          <h2 className='inline-block text-gray-500 font-bold text-2xl md:text-3xl  tracking-[-1.25px] '>
            {title}
          </h2>
          <h3 className='font-medium text-gray-600'>{subTitle}</h3>
        </div>
        <div className='space-y-4'>
          <p className='text-base leading-normal text-paragraph'>
            {description}
          </p>
          <button
            style={{
              backgroundColor: '#dfdfdf',
            }}
            className='px-4 py-2 text-sm rounded-md bg-gray-50 text-paragraph'
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
      <div className='w-full md:w-1/3'>
        <Image width={400} height={400} src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
