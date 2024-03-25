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
        className='h-10 pt-[6px] pl-3 text-sm bar-bg border-t-8 rounded-br-xl'>
        {label}
      </div>
      <div className='w-2 h-[33px] bar-top top-sm'></div>
    </li>
  );
};

export default Piller;
