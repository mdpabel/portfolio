import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import SmallScreenNavbar from './small-screen-navbar';

export const navItems = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Notes',
    path: '/notes',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export type Menus = typeof navItems;

const Header = async () => {
  return (
    <header className='pt-6'>
      <BigScreenNavbar menus={navItems} />
      <SmallScreenNavbar menus={navItems} />
    </header>
  );
};

export default Header;
