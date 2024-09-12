import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/logo.png'
        alt='MD Pabel'
        width={50}
        height={50}
        className='rounded-full'
      />
    </Link>
  );
};

export default Logo;
