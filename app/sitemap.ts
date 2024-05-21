import fs from 'fs';
import path from 'path';
import { getNotes } from '@/utils/notes';

export const dynamic = 'force-static';

const dirPath = './app';

const getPages = (): string[] => {
  const files = fs.readdirSync(dirPath);

  const pages = files
    .filter((file: string) => {
      const filePath = path.join(dirPath, file);
      return fs.statSync(filePath).isDirectory();
    })
    .filter((page: string) => page !== 'api');

  return [...pages, ''];
};

const getNoteSluges = async () => {
  const notes = await getNotes();

  const pages = notes.map((note) => note.slug);

  return pages;
};

type ChangeFrequencyType =
  | 'weekly'
  | 'always'
  | 'hourly'
  | 'daily'
  | 'monthly'
  | 'yearly'
  | 'never'
  | undefined;

export default async function sitemap() {
  const pages = getPages();
  const noteSluges = await getNoteSluges();

  const pageSitemaps = pages.map((page) => ({
    url: `https://www.mdpabel.com/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequencyType,
    priority: 0.8,
  }));

  const noteSiteMaps = noteSluges.map((slug) => ({
    url: `https://www.mdpabel.com/notes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequencyType,
    priority: 0.8,
  }));

  return [...pageSitemaps, ...noteSiteMaps];
}
