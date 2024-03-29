'use client';
import React, { useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { SearchIcon } from '@/components/ui/Icons';
import { Input } from '@/components/ui/Input';
import Spinner from '@/components/ui/Spinner';

const Search = () => {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [value] = useDebounce(text, 150);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    startTransition(() => router.replace(pathName + '?' + params.toString()));
  }, [pathName, router, searchParams, value]);

  return (
    <div className='relative'>
      <Input
        placeholder='Search Notes...'
        className='bg-gray-700 text-gray-50'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='absolute right-0 inset-y-0 pr-2 pt-1'>
        {isPending ? <Spinner /> : <SearchIcon />}
      </div>
    </div>
  );
};

export default Search;
