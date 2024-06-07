import { getNoteView } from '@/utils/notes';
import Image from 'next/image';
import videIcon from '@/public/videoIcon.png';

const View = ({ title }: { title: string }) => {
  const totalViews = getNoteView(title);

  return (
    <div className='hidden md:flex md:space-x-2 text-gray-500 text-sm line-clamp-1'>
      <span>{totalViews} views</span>
      <Image src={videIcon} alt='video icon' width={20} height={15} />
    </div>
  );
};

export default View;
