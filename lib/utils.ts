import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateAndTime = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export function calculateReadingTime(
  wordCount: number,
  averageReadingSpeed: number = 250,
): number {
  return Math.ceil(wordCount / averageReadingSpeed);
}
