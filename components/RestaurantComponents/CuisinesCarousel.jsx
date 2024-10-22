import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cuisinesData } from '@/data/cuisinesData';  // Ensure this path is correct

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 8; // Number of logos to display on large screens
  const autoPlaySpeed = 2000; // Speed for autoplay in milliseconds

  // Responsive settings for different screen sizes
  const getSlidesToShow = () => {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return slidesToShow;
  };

  const [visibleSlides, setVisibleSlides] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % cuisinesData.length
      );
    }, autoPlaySpeed);
    return () => clearInterval(interval);
  }, []);

  // Calculate the current visible set of logos based on the index
  const getVisibleLogos = () => {
    const start = currentIndex;
    const end = (start + visibleSlides) % cuisinesData.length;
    if (end > start) {
      return cuisinesData.slice(start, end);
    }
    return [...cuisinesData.slice(start), ...cuisinesData.slice(0, end)];
  };

  return (
    <>
      <h1 className="text-3xl font-bold mt-4">Cuisines for you</h1>
      <section
        aria-label="Cuisine Carousel"
        className="logo-carousel mx-auto w-full max-w-[22rem] md:max-w-[32rem] lg:max-w-[69rem] xl:max-w-[69rem]"
      >
        <div className="flex overflow-hidden">
          {getVisibleLogos().map((logo, index) => (
            <article key={index} className="p-4 text-center flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.description}
                width={150}
                height={150}
                className="mx-auto bg-grey-500 rounded-md transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                priority={index === 0}
              />
              <h3 className="mt-2 text-gray-700">{logo.description}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default LogoCarousel;
