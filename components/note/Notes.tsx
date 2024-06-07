import View from '@/components/note/View';
import { NotesType, getNotes } from '@/utils/notes';
import Link from 'next/link';
import React, { Suspense } from 'react';

const Notes = ({ notes }: { notes: NotesType }) => {
  return (
    <ul className='space-y-6'>
      {notes?.map((note, index) => (
        <li key={index} className='transition-transform hover:scale-[1.01]'>
          <Link
            href={'/notes/' + note.slug}
            className='flex justify-between items-center'>
            <div className='md:max-w-[88%]'>
              <h3 className='line-clamp-1 font-medium'>
                {note.file.data.title}
              </h3>
              <h4 className='line-clamp-1 text-gray-600 text-sm'>
                {note.file.data.description}
              </h4>
            </div>

            <Suspense
              fallback={
                <div className='md:block hidden line-clamp-1 text-gray-500 text-sm'>
                  ... views
                </div>
              }>
              <View title={note.file.data.title} />
            </Suspense>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
