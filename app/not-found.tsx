import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <section>
      <h1 className='mb-8 font-medium text-2xl tracking-tighter'>
        Oh no! This page doesn&apos;t exist
      </h1>
      <p className='flex'>
        If you expected to see something here, let me know{' '}
        <Link href='/contact'>Contact Me</Link>
      </p>
    </section>
  );
};

export default NotFound;
