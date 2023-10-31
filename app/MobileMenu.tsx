'use client';
import { ArrowUpRight, BarIcon, CrossIcon } from '@/components/Icons';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { navItems } from './Header';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const event = (e: MouseEvent) => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', event, true);

    return () => document.removeEventListener('click', event, true);
  }, []);

  return (
    <>
      <button
        className='block md:hidden'
        onClick={() => setOpen(!open)}
        type='button'>
        {open ? (
          <CrossIcon className='text-gray-800 w-7 h-7' />
        ) : (
          <BarIcon className='w-8 h-8 text-gray-800' />
        )}
      </button>

      <div
        ref={ref}
        style={{
          display: open ? 'block' : 'none',
        }}
        className='block w-full md:hidden '>
        <ul className='absolute right-0 z-50 flex flex-col w-full mt-4 bg-white/50 backdrop-blur-3xl rounded-lg md:hidden top-14'>
          {navItems.map((item) => (
            <li
              key={item.path}
              onClick={() => setOpen(false)}
              className='border-b'>
              <Link
                href={item.path}
                className={cn('block py-2 pl-3 pr-4 text-gray-700 rounded ')}
                aria-current='page'>
                {item.label}
              </Link>
            </li>
          ))}

          <li onClick={() => setOpen(false)} className='border-b'>
            <Link
              className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              href='https://drive.google.com/file/d/1A6I4qF3WBwlKskaAT23G5volEAJ-9i4T/view?usp=share_link'
              target='_blank'>
              My CV <ArrowUpRight />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
