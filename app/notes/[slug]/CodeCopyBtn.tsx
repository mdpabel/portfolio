'use client';
import React, { ReactNode } from 'react';

export default function CodeCopyBtn({ children }: { children: ReactNode }) {
  const [copy, setCopy] = React.useState(false);

  const handleClick = () => {
    const textToCopy = (children as React.ReactElement).props.children;

    navigator.clipboard.writeText(textToCopy);

    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  return (
    <button className='absolute right-2 top-2' onClick={handleClick}>
      {copy ? 'Copied' : 'Copy'}
    </button>
  );
}
