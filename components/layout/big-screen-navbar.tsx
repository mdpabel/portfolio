import Link from 'next/link';
import Logo from './logo';
import { Menus } from './header';
import ThemeSwitcher from '../ThemeSwitcher';

const BigScreenNavbar = ({ menus }: { menus: Menus }) => {
  return (
    <div className='md:block hidden px-4 sm:px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='items-center grid grid-cols-3'>
        <Logo />
        <nav className='flex justify-center'>
          <ul className='flex bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur px-3 rounded-full max-w-max font-medium dark:text-zinc-200'>
            {menus?.map((menu, index) => (
              <li key={index} className='px-3 py-2'>
                <Link
                  href={menu.path}
                  className='text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-100 transition'>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex justify-end'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default BigScreenNavbar;
