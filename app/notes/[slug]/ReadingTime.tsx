import React from 'react';
import readingTime from 'reading-time';

const ReadingTime = ({ content }: { content: string }) => {
  const stats = readingTime(content);

  return <div>{stats.text}</div>;
};

export default ReadingTime;
