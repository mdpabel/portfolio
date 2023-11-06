'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('/me_2.jpg', {
    as: 'image',
  });

  return null;
}
