import { getNoteView } from '@/utils/notes';
import Image from 'next/image';
import videIcon from '@/public/videoIcon.png';
import { unstable_noStore as noStore } from 'next/cache';

const View = ({ title }: { title: string }) => {
  noStore();
  const totalViews = getNoteView(title);

  return (
    <div className='md:flex md:space-x-2 hidden line-clamp-1 text-gray-500 text-sm'>
      <span>{totalViews} views</span>
      <Image src={videIcon} alt='video icon' width={20} height={15} />
    </div>
  );
};

export default View;
