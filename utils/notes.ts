import matter, { GrayMatterFile } from 'gray-matter';

import fetchMdxFiles from './githubMdx';
import { redis } from '../lib/redis';
import { cache } from 'react';

export const getNote = cache(async (slug: string) => {
  const notes = await getNotes();
  const note = await notes?.find((note) => note.slug === slug);

  return note;
});

export const getNotes = cache(async (search?: string) => {
  const files = await fetchMdxFiles();

  const parsedFiles = files?.map((file) => matter(file.content));

  if (!parsedFiles) {
    return [];
  }

  const notes = await Promise.all(
    parsedFiles.map<Promise<{ file: GrayMatterFile<string>; slug: string }>>(
      async (file) => {
        return {
          file: await file,
          slug: generateSlug(file.data.title),
        };
      },
    ),
  );

  const sortedNotes = notes.sort((a, b) =>
    a.file.data.title.localeCompare(b.file.data.title, undefined, {
      sensitivity: 'base',
    }),
  );

  if (search) {
    return sortedNotes.filter((note) =>
      note.file.data.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return sortedNotes;
});

export function generateSlug(filename: string) {
  return filename.replace(/\.[^/.]+$/, '').replace(/\s+/g, '-');
}

export const incrementNoteView = async (title: string) => {
  await redis.incrby(title, 1);
};

export const getNoteView = async (title: string) => {
  const view = await redis.get(title);

  return Number(view);
};
