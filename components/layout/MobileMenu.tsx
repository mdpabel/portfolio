'use client';
import { ArrowUpRight, BarIcon, CrossIcon } from '@/components/ui/Icons';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { navItems } from './Header-old';
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
          <CrossIcon className='w-7 h-7 text-gray-800' />
        ) : (
          <BarIcon className='w-8 h-8 text-gray-800' />
        )}
      </button>

      <div
        ref={ref}
        style={{
          display: open ? 'block' : 'none',
        }}
        className='block md:hidden w-full'>
        <ul className='top-14 right-0 z-50 absolute flex flex-col md:hidden bg-white mt-4 rounded-lg w-full'>
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
              className='block hover:bg-gray-100 py-2 pr-4 pl-3 rounded text-gray-700'
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
