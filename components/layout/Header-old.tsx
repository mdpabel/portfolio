import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ArrowUpRight } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';
import { cvLink } from '@/data';

export const navItems = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Notes',
    path: '/notes',
  },
  // {
  //   label: 'Hire me',
  //   path: '/hire-me',
  // },
  {
    label: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <header className='relative z-50 flex justify-between items-center mx-auto mt-10 max-w-6xl h-16'>
      <div className='text-2xl text-gray-600'>
        <Link className='font-medium' href='/'>
          {'<Pabel />'}
        </Link>
      </div>
      <nav className='flex justify-between items-center'>
        <ul className='md:flex items-center space-x-6 hidden text-gray-600'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                prefetch={true}
                className={cn('font-medium text-base')}
                href={item.path}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className='flex items-center bg-slate-50 shadow-lg px-7 py-2 rounded-3xl transition-transform hover:scale-[1.05]'
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
