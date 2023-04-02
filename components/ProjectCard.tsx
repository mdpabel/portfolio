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
  Button: any;
}

const ProjectCard = ({
  top,
  number,
  title,
  subTitle,
  description,
  imgUrl,
  technologies,
  Button,
}: ProjectCardType) => {
  return (
    <div
      style={{
        backgroundColor: '#f1f0f0',
        top: top ? top : '10%',
      }}
      className='flex px-10 md:pl-20 py-10 md:sticky rounded-2xl gap-4 flex-col md:flex-row max-w-5xl mx-auto md:max-h-[80vh] my-10 justify-between shadow-sm border'
    >
      <div className='flex flex-col justify-between w-full space-y-4 md:w-1/2 '>
        <h2 className='text-2xl font-medium text-gray-600'>{number}</h2>
        <div className='space-y-3 '>
          <h2 className='inline-block text-gray-500 font-medium text-2xl md:text-3xl tracking-[-1.25px] '>
            {title}
          </h2>
          <h3 className='font-medium text-gray-600'>{subTitle}</h3>
        </div>
        <div className='space-y-4'>
          <p className='text-base leading-normal text-paragraph'>
            {description}
          </p>
          {Button}
        </div>
        <ul className='flex flex-wrap pt-4 text-sm list-disc list-inside gap-x-4 text-paragraph'>
          {technologies.map((label, index) => (
            <li key={index} className=''>
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center w-full md:w-1/2'>
        <Image width={400} height={400} src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
