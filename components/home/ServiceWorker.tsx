'use client';

import { useEffect } from 'react';

const ServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return null;
};

export default ServiceWorker;
