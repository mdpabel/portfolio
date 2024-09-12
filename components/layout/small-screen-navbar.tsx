import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Logo from './logo';
import { Menus } from './header';
import { BarIcon } from '../ui/Icons';
import ThemeSwitcher from '../ThemeSwitcher';

const SmallScreenNavbar = ({ menus }: { menus: Menus }) => {
  return (
    <div className='block md:hidden w-full max-w-5xl container'>
      <div className='flex justify-between'>
        <Logo />
        <div className='flex items-center space-x-5'>
          <ThemeSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className='flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
                <BarIcon className='w-5 h-5' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mt-5 px-4 sm:px-8 lg:px-12 w-screen'>
              {menus?.map((menu, index) => (
                <div key={index}>
                  <DropdownMenuItem>
                    <Link
                      href={menu.path}
                      className='block w-full cursor-pointer'>
                      {menu.label}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
