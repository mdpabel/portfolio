import { Input } from '@/components/ui/Input';
import { formatDateAndTime } from '@/lib/utils';
import Link from 'next/link';

import { getNotes } from '@/lib/notes';
import Search from './Search';

// export const dynamic = 'force-static';

type PageProps = {
  searchParams: {
    search: string;
  };
};

const Notes = async ({ searchParams }: PageProps) => {
  const notes = await getNotes(searchParams?.search);

  return (
    <div className='space-y-6 py-10'>
      <h1 className='text-2xl font-semibold text-gray-600 mb-2'>All Notes</h1>
      <Search />

      <ul className='space-y-6'>
        {notes?.map((note, index) => (
          <li key={index}>
            <Link
              href={'/notes/' + note.slug}
              className='flex justify-between items-center'>
              <div className='md:max-w-[88%]'>
                <h3 className='font-medium line-clamp-1'>{note.data.title}</h3>
                <h4 className='text-gray-600 line-clamp-1 text-sm'>
                  {note.data.description}
                </h4>
              </div>
              <div className='hidden md:block text-gray-500 text-sm line-clamp-1'>
                {formatDateAndTime(note.data.date)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
