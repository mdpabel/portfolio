import React, { ReactNode } from 'react';

const Title = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-full ` + className}
    >
      <hr className='w-64 h-px my-8 bg-gray-400 border-0 ' />
      <span className='absolute px-3 text-2xl font-medium text-gray-600 -translate-x-1/2 main-bg left-1/2'>
        {children}
      </span>
    </div>
  );
};

export default Title;
