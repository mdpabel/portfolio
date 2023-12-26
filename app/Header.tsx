import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ArrowUpRight } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { cvLink } from '@/data';

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
  return (
    <header className='relative flex items-center justify-between h-16 max-w-6xl mx-auto mt-10 z-50'>
      <div className='text-2xl text-gray-600'>
        <Link className='font-medium' href='/'>
          {'<Pabel />'}
        </Link>
      </div>
      <nav className='flex justify-between items-center'>
        <ul className='items-center hidden space-x-6 text-gray-600 md:flex'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className={cn('font-medium text-base')} href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className='flex items-center py-2 shadow-lg px-7 bg-slate-50 rounded-3xl '
              href={cvLink}
              target='_blank'>
              My CV <ArrowUpRight />
            </Link>
          </li>
        </ul>
        {/* MOBILE NAVBAR  */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
