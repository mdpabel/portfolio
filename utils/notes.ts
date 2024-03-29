import matter, { GrayMatterFile } from 'gray-matter';

import fetchMdxFiles from './githubMdx';
import { redis } from '../lib/redis';

type Note = {
  slug: string;
  view: unknown;
  data: {
    title: string;
    description: string;
    date: Date;
  };
  content: string;
  excerpt?: string | undefined;
  orig: string | Buffer;
  language: string;
  matter: string;
};

export const getNote = async (slug: string) => {
  const notes = await getNotes();
  const note = await notes?.find((note) => note.slug === slug);

  return note;
};

export const getNotes = async (search?: string) => {
  const files = await fetchMdxFiles();

  const parsedFiles = files?.map((file) => matter(file.content));

  if (!parsedFiles) {
    return []; // Return an empty array if parsedFiles is undefined
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

  if (search) {
    return notes.filter((note) =>
      note.file.data.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return notes;
};

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
