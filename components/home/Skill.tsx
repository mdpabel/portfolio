import React from 'react';
import { skillsArray } from './Skills';

const genLeftPixels = (index: number) => {
  const n = skillsArray.length;
  return (100 / n) * index - 3 + '%';
};

const Skill = ({
  label,
  index,
  level,
}: {
  label: string;
  index: number;
  level: string;
}) => {
  return (
    <li
      className='bottom-0 absolute bar'
      style={{
        left: genLeftPixels(index),
      }}>
      <div className='bar-top top w-8 h-2'></div>
      <div
        style={{
          height: level,
        }}
        className='border-l-8 w-10 bar-bg'></div>
      <span className='inline-block -bottom-14 left-2 absolute w-24 text-gray-500 text-sm rotate-45'>
        {label}
      </span>
    </li>
  );
};

export default Skill;
