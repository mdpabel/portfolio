import { getNoteView } from '@/utils/notes';
import React from 'react';

const View = ({ title }: { title: string }) => {
  const totalViews = getNoteView(title);

  return (
    <div className='hidden md:block text-gray-500 text-sm line-clamp-1'>
      {totalViews} views
    </div>
  );
};

export default View;
