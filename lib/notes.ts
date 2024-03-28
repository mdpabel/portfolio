import matter from 'gray-matter';

import fetchMdxFiles from './githubMdx';

export const getNote = async (slug: string) => {
  const notes = await getNotes();
  const note = notes?.find((note) => note.slug === slug);

  return note;
};

export const getNotes = async (search?: string) => {
  const files = await fetchMdxFiles();

  const parsedFiles = files?.map((file) => matter(file.content));

  const notes = parsedFiles?.map((file) => {
    return {
      ...file,
      slug: generateSlug(file.data.title),
    };
  });

  if (search) {
    return notes?.filter((note) =>
      note.data.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return notes;

  return;
};

export function generateSlug(filename: string) {
  return filename.replace(/\.[^/.]+$/, '').replace(/\s+/g, '-');
}
