import Image from 'next/image';
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

interface Img {
  url: string;
  speed: number;
}
const ProjectImages = ({ images }: { images: Img[] }) => {
  return (
    <ParallaxProvider>
      <div className='grid md:w-3/5 grid-cols-1 md:grid-cols-11 gap-10 mt-[40%]'>
        {images.map((item, index) => (
          <Parallax key={index} className='col-span-5' speed={item.speed}>
            <Image
              height={500}
              width={400}
              className='grid-row-1 grid-column-1 w-full'
              src={'/' + item.url}
              alt=''
            />
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default ProjectImages;
