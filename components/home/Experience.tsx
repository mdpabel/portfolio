import Title from '@/components/ui/Title';
import { totalClients, totalWebsiteFixes } from '@/data';
import React from 'react';

const Experience = () => {
  return (
    <div className='mt-32 md:mt-[120px] space-y-8 rounded-2xl'>
      <Title className='md:sticky top-2'>Professional Experience</Title>
      <div className='bg-white/50 px-8 backdrop-blur-3xl md:pl-20 py-8 md:sticky rounded-2xl gap-4 max-w-5xl mx-auto md:max-h-[80vh] my-10 shadow-sm border space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='font-semibold text-gray-700'>
            Web Developer | Malware and Virus Analyst
          </h2>
          <span className='hidden md:inline-block font-semibold text-gray-700'>
            Jul 2018 - Present
          </span>
        </div>
        <ul className='list-disc list-inside space-y-1'>
          <li>
            Worked on contract and freelance basis,{' '}
            <strong className='text-gray-600'>
              fixed over {totalWebsiteFixes} websites
            </strong>
            .
          </li>
          <li>
            Analyze malware samples and determine the nature and severity of
            threats to client websites.
          </li>
          <li>
            Successfully removed malware from over{' '}
            <strong className='text-gray-600'>
              {totalClients} client sites across 43% of countries worldwide
            </strong>
            , minimizing the impact of the attacks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
