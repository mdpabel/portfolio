import { Input } from '@/components/ui/Input';
import { formatDateAndTime } from '@/lib/utils';
import Link from 'next/link';

import { getNotes } from '@/utils/notes';
import Search from './Search';
import View from './View';
import { Suspense } from 'react';

type PageProps = {
  searchParams: {
    search: string;
  };
};

export const runtime = 'edge';

const Notes = async ({ searchParams }: PageProps) => {
  const notes = await getNotes(searchParams?.search);

  return (
    <div className='space-y-6 py-10'>
      <h1 className='text-2xl font-semibold text-gray-600 mb-2'>All Notes</h1>
      <Search />

      <ul className='space-y-6'>
        {notes?.map((note, index) => (
          <li key={index} className='transition-transform hover:scale-[1.01]'>
            <Link
              href={'/notes/' + note.slug}
              className='flex justify-between items-center'>
              <div className='md:max-w-[88%]'>
                <h3 className='font-medium line-clamp-1'>
                  {note.file.data.title}
                </h3>
                <h4 className='text-gray-600 line-clamp-1 text-sm'>
                  {note.file.data.description}
                </h4>
              </div>

              <Suspense
                fallback={
                  <div className='hidden md:block text-gray-500 text-sm line-clamp-1'>
                    ... views
                  </div>
                }>
                <View title={note.file.data.title} />
              </Suspense>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
