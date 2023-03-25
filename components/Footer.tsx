import Link from 'next/link';
import React from 'react';
import { EmailIcon, FBIcon, TwitterIcon } from './Icons';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#f1f0f0',
      }}
      className='flex flex-col items-center gap-4 p-10'
    >
      <div className='flex gap-4'>
        <a href='mailto:mdpabel385@gmail.com'>
          <EmailIcon />
        </a>
        <Link href='https://facebook.com/mdpabe1' target='_blank'>
          <FBIcon />
        </Link>
        <Link href='https://facebook.com/mdpabe1' target='_blank'>
          <TwitterIcon />
        </Link>
      </div>
      <div className='text-gray-600'>No &copy; copyright issues.</div>
    </div>
  );
};

export default Footer;
