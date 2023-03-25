import Link from 'next/link';
import { ReactNode } from 'react';

const Button = ({ children, href }: { children: ReactNode; href: string }) => (
  <div>
    <Link
      href={href}
      className='px-4 py-2 text-sm bg-white rounded-md text-paragraph'
    >
      {children}
    </Link>
  </div>
);

export default Button;
