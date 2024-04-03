import lazy from 'next/dynamic';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { calculateReadingTime, formatDateAndTime } from '@/lib/utils';
import Image from 'next/image';
import MyImg from '@/public/me_3.jpg';
import TimerIcon from './TimerIcon';
import LeftArrowIcon from './LeftArrowIcon';
import Link from 'next/link';
import { getNote, getNotes, incrementNoteView } from '@/utils/notes';

import Content from './Content';
import View from '../View';

const ScrollToTopButton = lazy(() => import('@/components/ScrollToTopButton'));

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const notes = await getNotes();

  console.log(
    notes?.map((note) => ({
      slug: note.slug,
    })),
  );

  return notes?.map((note) => ({
    slug: note.slug,
  }));
}

type PropTypes = { params: { slug: string } };

const page = async ({ params }: PropTypes) => {
  const note = await getNote(params?.slug);

  if (!note) return notFound();

  incrementNoteView(note.file.data.title);

  return (
    <div className='space-y-6 py-10'>
      <Link href='/notes'>
        <span className='flex text-sm text-gray-500 items-center space-x-2'>
          <LeftArrowIcon />
          <span>Back to Notes</span>
        </span>
      </Link>
      <h1 className='text-2xl font-medium text-gray-600 mb-2'>
        {note.file?.data?.title}
      </h1>
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
          <p className='text-sm text-gray-500'>
            <span>MD Pabel</span> /{' '}
            <span>{formatDateAndTime(note.file.data.date)}</span>
          </p>
        </div>

        <div className='flex space-x-2 items-center'>
          <div className='flex items-center space-x-2 text-sm text-gray-500'>
            <span>
              <TimerIcon />
            </span>
            <span>
              {calculateReadingTime(note.file.content.length)} min read
            </span>
          </div>

          <div className='w-1 h-1 rounded-full bg-black'></div>

          <Suspense
            fallback={
              <div className='hidden md:block text-gray-500 text-sm line-clamp-1'>
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
