import Script from 'next/script';
import React from 'react';

const page = () => {
  return (
    <div>
      <Script
        src='https://tally.so/widgets/embed.js'
        type='text/javascript'></Script>
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          border: 0,
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

export default page;
