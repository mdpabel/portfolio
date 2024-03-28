'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const useSetParams = (text: string) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set('search', text);
      router.replace(pathName + '/?search=' + text);
    } else {
      params.delete('search');
      router.replace(pathName);
    }
  }, [pathName, router, searchParams, text]);
};

export default useSetParams;
