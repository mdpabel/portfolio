import React from 'react';
import { notFound } from 'next/navigation';
import { calculateReadingTime, formatDateAndTime } from '@/lib/utils';
import Image from 'next/image';
import MyImg from '@/public/me_3.jpg';
import TimerIcon from './TimerIcon';
import LeftArrowIcon from './LeftArrowIcon';
import Link from 'next/link';
import { getNote, getNotes } from '@/lib/notes';

import Content from './Content';

export async function generateStaticParams() {
  const notes = await getNotes();

  return notes?.map((note) => ({
    slug: note.slug,
  }));
}

type PropTypes = { params: { slug: string } };

const page = async ({ params }: PropTypes) => {
  const note = await getNote(params?.slug);

  if (!note) return notFound();

  return (
    <div className='space-y-6 py-10'>
      <Link href='/notes'>
        <span className='flex text-sm text-gray-500 items-center space-x-2'>
          <LeftArrowIcon />
          <span>Back to Notes</span>
        </span>
      </Link>
      <h1 className='text-2xl font-medium text-gray-600 mb-2'>
        {note?.data?.title}
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
            <span>{formatDateAndTime(note.data.date)}</span>
          </p>
        </div>

        <div className='flex items-center space-x-2 text-sm text-gray-500'>
          <span>
            <TimerIcon />
          </span>
          <span>{calculateReadingTime(note.content.length)} min read</span>
        </div>
      </div>

      <Content content={note.content} />
    </div>
  );
};

export default page;
