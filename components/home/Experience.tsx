import Title from '@/components/ui/Title';
import { totalClients, totalWebsiteFixes, worldDominaation } from '@/data';
import React from 'react';

const Experience = () => {
  return (
    <div className='space-y-8 mt-32 md:mt-[120px] rounded-2xl'>
      <Title className='top-2 md:sticky'>Professional Experience</Title>
      <div className='md:sticky gap-4 space-y-4 bg-white/50 shadow-sm backdrop-blur-3xl mx-auto my-10 px-8 py-8 md:pl-20 border rounded-2xl max-w-5xl md:max-h-[80vh]'>
        <div className='flex justify-between w-full'>
          <h2 className='font-semibold text-gray-700'>
            Web Developer | Malware and Virus Analyst
          </h2>
          <span className='md:inline-block hidden font-semibold text-gray-700'>
            Jul 2018 - Present
          </span>
        </div>
        <ul className='space-y-1 list-disc list-inside'>
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
              {totalClients} client sites across {worldDominaation}% of
              countries worldwide
            </strong>
            , minimizing the impact of the attacks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
