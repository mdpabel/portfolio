import { getNotes } from '@/utils/notes';
import Search from '../../components/note/Search';
import Notes from '@/components/note/Notes';

type PageProps = {
  searchParams: {
    search: string;
  };
};

const NotesPage = async ({ searchParams }: PageProps) => {
  const notes = await getNotes(searchParams?.search);

  return (
    <div className='space-y-6 py-10'>
      <h1 className='mb-2 font-semibold text-2xl text-gray-600'>All Notes</h1>
      <Search />
      <Notes notes={notes} />
    </div>
  );
};

export default NotesPage;
