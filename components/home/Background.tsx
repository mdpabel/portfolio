const Background = () => {
  return (
    <svg className='absolute inset-0 w-full h-full'>
      <defs>
        <pattern
          id='pattern'
          width='160'
          height='160'
          patternUnits='userSpaceOnUse'>
          <line
            x1='0'
            y1='80'
            x2='80'
            y2='0'
            stroke='#f0f1f3'
            strokeWidth='1'
          />
          <line
            x1='80'
            y1='0'
            x2='160'
            y2='80'
            stroke='#f0f1f3'
            strokeWidth='1'
          />
          <line
            x1='160'
            y1='80'
            x2='80'
            y2='160'
            stroke='#f0f1f3'
            strokeWidth='1'
          />
          <line
            x1='80'
            y1='160'
            x2='0'
            y2='80'
            stroke='#f0f1f3'
            strokeWidth='1'
          />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#pattern)' />
    </svg>
  );
};

export default Background;
