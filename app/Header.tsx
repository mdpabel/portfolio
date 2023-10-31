'use client';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ArrowUpRight } from '@/components/Icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const navItems = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className='relative flex items-center justify-between h-16 max-w-6xl mx-auto mt-10'>
      <div className='text-2xl text-gray-600'>
        <Link className='font-medium' href='/'>
          {'<Pabel />'}
        </Link>
      </div>
      <nav className='flex justify-between items-center'>
        <ul className='items-center hidden space-x-6 text-gray-600 md:flex'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={cn(
                  'font-medium',
                  pathName === item.path && 'font-bold',
                )}
                href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className='flex items-center py-2 shadow-lg px-7 bg-slate-50 rounded-3xl '
              href='https://drive.google.com/file/d/1X3ryVIOw_UvzNRk-jNTRvDwkuQsoDDOU/view?usp=drive_link'
              target='_blank'>
              My CV <ArrowUpRight />
            </Link>
          </li>
        </ul>
        {/* MOBILE NAVBAR  */}
        <MobileMenu pathName={pathName} />
      </nav>
    </header>
  );
};

export default Header;
