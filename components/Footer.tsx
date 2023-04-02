import Link from 'next/link';
import React from 'react';
import { EmailIcon, FBIcon, PhoneIcon, TwitterIcon } from './Icons';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#f1f0f0',
      }}
      className='flex flex-col items-center gap-4 p-10'
    >
      <div className='flex gap-4'>
        <Link aria-label='Email' href='mailto:mdpabel385@gmail.com'>
          <EmailIcon />
        </Link>
        <Link aria-label='Phone' href='tel:+8801761442268'>
          <PhoneIcon />
        </Link>
        <Link
          aria-label='Facebook'
          href='https://facebook.com/mdpabe1'
          target='_blank'
        >
          <FBIcon />
        </Link>
        <Link
          aria-label='Twitter'
          href='https://facebook.com/mdpabe1'
          target='_blank'
        >
          <TwitterIcon />
        </Link>
      </div>
      <div className='text-gray-600'>No &copy; copyright issues.</div>
    </div>
  );
};

export default Footer;
