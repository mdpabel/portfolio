'use client';
import React, { useEffect, useRef } from 'react';

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const currentRef = ref.current;
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    currentRef.appendChild(script);

    return () => {
      if (currentRef.contains(script)) {
        currentRef.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      id='iframe-container'
      className='relative mx-auto pt-12 md:pt-20 max-w-5xl'>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
          minHeight: '80vh',
        }}
        data-tally-src='https://tally.so/r/w8kbqP?transparentBackground=1'
        width='100%'
        height='100%'
        frameBorder='0'
        marginHeight={0}
        marginWidth={0}
        title='Hire Me – Your Next Top Talent'></iframe>
    </div>
  );
};

export default Page;
