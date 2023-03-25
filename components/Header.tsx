import Link from 'next/link';
import React from 'react';
import { BarIcon } from './Icons';
import Tab from './Tab';

const Header = () => {
  return (
    <header className='flex items-center justify-between h-16 max-w-6xl px-8 mx-auto mt-10 '>
      <div className='text-2xl text-gray-600'>
        <Link href='/'>{'<Pabel />'}</Link>
      </div>
      <div>
        <Tab />
      </div>
      <div>
        <BarIcon className='w-8 h-8 text-gray-800' />
      </div>
    </header>
  );
};

export default Header;
