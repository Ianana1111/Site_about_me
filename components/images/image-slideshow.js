"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

const images = [
  { image: "/images/site/-5_4.jpg" , alt: 'A delicious, juicy burger' },
  { image: "/images/site/nycu.jpg", alt: 'A delicious, spicy curry' },
  { image: "/images/site/好漂亮.jpg", alt: 'Steamed dumplings' },
  { image: "/images/site/臭老鼠.jpg", alt: 'Mac and cheese' },
  { image: "/images/site/-5_4.jpg", alt: 'A delicious pizza' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          width = {40}
          height = {25}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}