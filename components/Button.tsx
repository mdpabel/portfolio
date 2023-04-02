import Link from 'next/link';
import { ReactNode } from 'react';

const Button = ({ children, href }: { children: ReactNode; href: string }) => (
  <div>
    <Link
      href={href}
      target='_blank'
      className='px-4 py-2 text-sm rounded-md shadow bg-slate-50 text-paragraph'
    >
      {children}
    </Link>
  </div>
);

export default Button;
