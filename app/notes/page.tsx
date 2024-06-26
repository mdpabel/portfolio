import { getNotes } from '@/utils/notes';
import Search from '../../components/note/Search';
import Notes from '@/components/note/Notes';
import { Metadata } from 'next';

// export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Read my notes on programming, software development and more.',
};

type PageProps = {
  searchParams: {
    search: string;
  };
};

const NotesPage = async ({ searchParams }: PageProps) => {
  const notes = await getNotes(searchParams?.search);

  return (
    <div className='space-y-6 mx-auto py-10 max-w-5xl'>
      <h1 className='mb-2 font-semibold text-2xl text-gray-600'>All Notes</h1>
      <Search />
      <Notes notes={notes} />
    </div>
  );
};

export default NotesPage;
