const Piller = ({
  label,
  index,
  level,
}: {
  label: string;
  index: number;
  level: string;
}) => {
  const l = +level.slice(0, 3);

  const width = (l * 100) / 220;

  return (
    <li className='relative flex w-full'>
      <div
        style={{
          width: `${width}%`,
        }}
        className='pt-[6px] pl-3 border-t-8 rounded-br-xl h-10 text-sm bar-bg'>
        {label}
      </div>
      <div className='bar-top top-sm w-2 h-[33px]'></div>
    </li>
  );
};

export default Piller;
