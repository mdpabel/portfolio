import Link from 'next/link';
import { ReactNode } from 'react';

const Button = ({
  children,
  href,
  disabled = false,
}: {
  disabled?: boolean;
  children: ReactNode;
  href: string;
}) => {
  const disabledClasses = disabled === true ? 'cursor-not-allowed' : '';

  return (
    <div>
      <Link
        href={href}
        className={
          `px-4 py-2 text-sm rounded-md shadow bg-slate-50 text-paragraph ` +
          disabledClasses
        }
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
