import React from 'react';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import Image from 'next/image';

export async function fetchGalleryImages() {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const years = fs
    .readdirSync(galleryPath)
    .sort((a: string, b: string) => parseInt(b) - parseInt(a));

  const images: {
    src: string;
    title: string;
    date: string;
    width: number;
    height: number;
  }[] = [];

  for (const year of years) {
    const yearPath = path.join(galleryPath, year);
    const imageFiles = fs.readdirSync(yearPath);

    for (const imageFile of imageFiles) {
      const imageUrl = `/gallery/${year}/${imageFile}`;
      const imagePath = path.join(yearPath, imageFile);
      const metadata = await sharp(imagePath).metadata();

      images.push({
        src: imageUrl,
        title: path.parse(imageFile).name,
        date: year,
        width: metadata.width!,
        height: metadata.height!,
      });
    }
  }

  return images;
}

const Photos = async () => {
  const images = await fetchGalleryImages();

  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {images.map((image, index) => (
        <div key={index} className='mb-4 break-inside-avoid'>
          <Image
            src={image.src}
            alt={image.title}
            width={image.width}
            height={image.height}
            className='rounded-lg w-full aspect-square object-cover'
          />
          <p className='mt-2 text-center text-gray-600 text-sm'>
            {image.title} - {image.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Photos;
