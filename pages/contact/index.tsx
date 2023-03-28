import React from 'react';
import MainLayout from '@/layout/MainLayout';
import Form from '@/components/Form';
import {
  FBIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from '@/components/Icons';
import { EmailIcon } from './../../components/Icons';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='max-w-5xl mx-auto '>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div
          style={{
            backgroundColor: '#f1f0f0',
          }}
          className='flex flex-col items-center justify-center p-5 rounded-lg'
        >
          <div className='space-y-4'>
            <h2 className='mb-4 text-4xl font-semibold text-gray-600 '>
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
          <Form />
        </div>
      </div>
    </div>
  );
};

Contact.layout = MainLayout;

export default Contact;
