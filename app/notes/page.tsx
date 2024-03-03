import { Input } from '@/components/Input';
import { formatDateAndTime } from '@/lib/utils';
import { allNotes } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

export const formatedNotes = () => {
  return allNotes.map((note) => ({
    ...note,
    Content: getMDXComponent(note.body.code),
  }));
};

const Notes = () => {
  const notes = formatedNotes();

  return (
    <div className='space-y-6 py-10'>
      <h1 className='text-2xl font-semibold text-gray-600 mb-2'>All Notes</h1>
      <Input
        placeholder='Search Notes...'
        className='bg-gray-700 text-gray-50'
      />
      <ul className='space-y-6'>
        {notes.map((note, index) => (
          <li key={index}>
            <Link
              href={'/notes' + note.slug}
              className='flex justify-between items-center'>
              <div>
                <h3 className='font-medium line-clamp-1'>{note.title}</h3>
                <h4 className='text-gray-600 line-clamp-1 text-sm'>
                  {note.description}
                </h4>
              </div>
              <div className='hidden md:block text-gray-500 text-sm line-clamp-1'>
                {formatDateAndTime(note.date)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
