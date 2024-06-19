import lazy from 'next/dynamic';
import React, { Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { calculateReadingTime, formatDateAndTime } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import MyImg from '@/public/me_3.jpg';
import TimerIcon from './TimerIcon';
import LeftArrowIcon from './LeftArrowIcon';
import { getNote, getNotes, incrementNoteView } from '@/utils/notes';
import Content from './Content';
import View from '../../../components/note/View';
import { EditIcon } from '@/components/ui/Icons';
import ReadintTime from './ReadingTime';
import ReadingTime from './ReadingTime';

const ScrollToTopButton = lazy(() => import('@/components/ScrollToTopButton'));

export const dynamic = 'error';

type PropTypes = { params: { slug: string } };

export async function generateMetadata(
  { params }: PropTypes,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const note = await getNote(params?.slug);

  if (!note) return {};

  return {
    title: note.file.data.title,
    description: note.file.data.description,
    publisher: 'MD Pabel',
    authors: [
      {
        name: 'MD Pabel',
        url: 'https://mdpabel.com',
      },
    ],
    category: note.file.data.title,
    creator: 'MD Pabel',
    keywords: [note.file.data.title, ...note.file.data.title.split(' ')],
  };
}

export async function generateStaticParams() {
  const notes = await getNotes();

  return notes?.map((note) => ({
    slug: note.slug,
  }));
}

const page = async ({ params }: PropTypes) => {
  const note = await getNote(params?.slug);

  if (!note) return notFound();

  incrementNoteView(note.file.data.title);

  const githubUrl = note.githubUrl ?? '';

  return (
    <div className='space-y-6 py-10'>
      <Link href='/notes'>
        <span className='flex items-center space-x-2 text-gray-900 text-sm'>
          <LeftArrowIcon />
          <span>Back to Notes</span>
        </span>
      </Link>
      <div className='flex justify-between items-center'>
        <h1 className='mb-2 font-medium text-2xl text-gray-600'>
          {note.file?.data?.title}
        </h1>
        <Link href={githubUrl} target='_blank'>
          <EditIcon />
        </Link>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Image
            priority={true}
            src={MyImg}
            alt='MD Pabel'
            width={35}
            height={35}
            className='rounded-full'
          />
          <p className='text-gray-500 text-sm'>
            <span>MD Pabel</span> /{' '}
            <span>{formatDateAndTime(note.file.data.date)}</span>
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <div className='flex items-center space-x-2 text-gray-500 text-sm'>
            <span>
              <TimerIcon />
            </span>
            {/* <span>
              {calculateReadingTime(note.file.content.length)} min read
            </span> */}
            <ReadingTime content={note.file.content} />
          </div>

          <div className='bg-black rounded-full w-1 h-1'></div>

          <Suspense
            fallback={
              <div className='md:block hidden line-clamp-1 text-gray-500 text-sm'>
                ... views
              </div>
            }>
            <View title={note.file.data.title} />
          </Suspense>
        </div>
      </div>

      <Content content={note.file.content} />

      <ScrollToTopButton />
    </div>
  );
};

export default page;
