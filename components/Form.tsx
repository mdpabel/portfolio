import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmission} className='px-10 space-y-8'>
      <div>
        <input
          type='email'
          id='email'
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
          placeholder='name@mdpabel.com'
          required
        />
      </div>
      <div>
        <input
          type='text'
          id='subject'
          className='block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500'
          placeholder='Subject...'
          required
        />
      </div>
      <div className='sm:col-span-2'>
        <textarea
          id='message'
          rows={6}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
          placeholder='Leave a comment...'
        ></textarea>
      </div>
      <button
        type='submit'
        className='px-5 py-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300'
      >
        Send message
      </button>
    </form>
  );
};

export default Form;
