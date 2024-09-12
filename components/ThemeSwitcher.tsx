import { handleThemeSwitcher } from '@/actions/theme-switcher';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import React from 'react';

const ThemeSwitcher = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;
  const dark = theme === 'dark';

  return (
    <div className='flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
      <form
        action={handleThemeSwitcher}
        className='flex justify-center items-center'>
        {dark ? (
          <button name='theme' value='light' type='submit'>
            <MoonStarIcon />
          </button>
        ) : (
          <button name='theme' value='dark' type='submit'>
            <SunIcon />
          </button>
        )}
      </form>
    </div>
  );
};

export default ThemeSwitcher;
