import {
  EmailIcon,
  FBIcon,
  PhoneIcon,
  TwitterIcon,
} from '@/components/ui/Icons';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex  bg-white/50 flex-col items-center gap-4 p-10'>
      <div className='flex gap-4'>
        <Link
          className=' transition-transform hover:scale-[1.2] duration-150'
          aria-label='Email'
          href='mailto:mdpabel385@gmail.com'>
          <EmailIcon />
        </Link>
        <Link
          className=' transition-transform hover:scale-[1.2] duration-150'
          aria-label='Phone'
          href='tel:+8801761442268'>
          <PhoneIcon />
        </Link>
        <Link
          className=' transition-transform hover:scale-[1.2] duration-150'
          aria-label='Facebook'
          href='https://facebook.com/mdpabe1'
          target='_blank'>
          <FBIcon />
        </Link>
        <Link
          className=' transition-transform hover:scale-[1.2] duration-150'
          aria-label='Twitter'
          href='https://facebook.com/mdpabe1'
          target='_blank'>
          <TwitterIcon />
        </Link>
      </div>
      <div className='text-gray-600'>No &copy; copyright issues.</div>
    </div>
  );
};

export default Footer;
