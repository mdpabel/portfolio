import React from 'react';
import {
  FBIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
  EmailIcon,
} from '@/components/ui/Icons';
import ContactForm from './ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export const dynamic = 'force-static';

const Contact = () => {
  return (
    <>
      <div className='mx-auto pt-12 md:pt-20 max-w-5xl'>
        <div className='gap-10 grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col justify-center items-center bg-white/50 p-5 rounded-lg'>
            <div className='space-y-4'>
              <h2 className='mb-4 font-semibold text-4xl text-gray-600'>
                Contact Me
              </h2>
              <div className='flex gap-4'>
                <LocationIcon />
                <span>Cumilla, BD</span>
              </div>

              <div className='flex gap-4'>
                <PhoneIcon />
                <span>+8801761442268</span>
              </div>

              <div className='flex gap-4'>
                <EmailIcon />
                <span>mdpabel385@gmail.com</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
