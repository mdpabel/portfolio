import React from 'react';
import Image from 'next/image';
import WorldDominance from './WorldDominance';
import {
  lastUpdate,
  totalClients,
  totalProjects,
  totalWebsiteFixes,
  worldDominaation,
} from '../../data';
import Skills from '../../components/home/Skills';
import MyImg from '@/public/me_2.jpg';

export const dynamic = 'force-static';
export const runtime = 'edge';

function calculateYearsSince(startDate: Date): number {
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = timeDiff / millisecondsInYear;
  return Math.floor(years) + (years % 1 >= 0.5 ? 0.5 : 0);
}

const About = async () => {
  const coding = calculateYearsSince(new Date(2019, 0, 12));
  const experience = calculateYearsSince(new Date(2018, 0, 7));

  return (
    <div className='space-y-4 py-2 md:py-6'>
      <Image priority={true} src={MyImg} alt='MD Pabel' />
      <div className='max-w-3xl mx-auto space-y-10'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>About</h2>
          <div className='space-y-3 leading-relaxed'>
            <p>
              Hello, I&apos;m <strong className='font-medium'>MD Pabel.</strong>
            </p>
            <p>
              My journey began in a remote corner of Bangladesh, and it&apos;s
              been a remarkable one. I&apos;m deeply committed to the world of
              technology, with a focus on programming and web scurity I&apos;ve
              honed my skills to solve real-world problems, particularly in
              cleansing websites from malware and safeguarding online spaces.
            </p>
            <p>
              I&apos;m dedicated to mastering technology, solving real problems,
              and making a positive impact. I&apos;m excited to keep learning
              and pushing boundaries in the tech world.
            </p>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>Skills</h2>
          <p>
            Let&apos;s have some fun with numbers from my tech journey. These
            stats don&apos;t hold any deep meaning, but they reflect my tech
            adventure, and you&apos;re welcome to draw your insights from them.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>Coding</h2>
          <ul className='grid md:grid-cols-2 gap-y-2 gap-x-8'>
            <ListItem leftText='Years Coding' rightText={coding} />
            <ListItem leftText='Developed Websites' rightText='10+' />
            <ListItem leftText='DS/Algo Problems Solved' rightText='700+' />
            <ListItem leftText='Database Problems Solved' rightText='100+' />
            <ListItem leftText='Languages Spoken' rightText='4' />
          </ul>

          <div className='flex justify-center pt-4'>
            <Image
              width={500}
              height={300}
              alt='Leetcode MD Pabel'
              src='https://leetcard.jacoblin.cool/mdpabel?theme=light&font=Karma'
            />
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>
            Real World Experience
            <sup className='text-sm ml-4 text-gray-600'>
              Last updated: {lastUpdate}
            </sup>
          </h2>
          <ul className='grid md:grid-cols-2 gap-y-3 gap-x-8'>
            <ListItem
              leftText='Real World Experience'
              rightText={'' + experience + '+'}
            />
            <ListItem leftText='Project Success' rightText={totalProjects} />
            <ListItem
              leftText='Hacked Website Fixes'
              rightText={totalWebsiteFixes + '+'}
            />
            <ListItem leftText='Clients' rightText={totalClients + '+'} />
            <ListItem
              leftText='Global Impact'
              rightText={worldDominaation + '%'}
            />
            <ListItem leftText='Websites Launched' rightText='10+' />
          </ul>

          <WorldDominance />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string | number;
}) => {
  return (
    <li className='flex justify-between'>
      <span className='text-gray-800'>{leftText}</span>
      <span className='bg-slate-200 px-3 rounded-full'>{rightText}</span>
    </li>
  );
};

export default About;
