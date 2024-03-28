'use client';
import { Input } from '@/components/ui/Input';
import useSetParams from '@/hooks/useSetParams';
import React, { useState } from 'react';

const Search = () => {
  const [text, setText] = useState('');
  useSetParams(text);

  return (
    <Input
      placeholder='Search Notes...'
      className='bg-gray-700 text-gray-50'
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
};

export default Search;
