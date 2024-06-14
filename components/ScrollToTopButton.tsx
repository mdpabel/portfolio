'use client';
import React, { useState, useEffect } from 'react';
import upArrow from '@/public/up-arrow.png';
import Image from 'next/image';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    // const audio = new Audio('/racingSound.mp3');
    // audio.play();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className='right-4 bottom-4 fixed transition-transform duration-200 hover:scale-110'
      style={{ display: isVisible ? 'block' : 'none' }}>
      <Image src={upArrow} alt='scroll up' width={40} height={40} />
    </button>
  );
}

export default ScrollToTopButton;
