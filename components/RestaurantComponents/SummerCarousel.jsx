import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { FaStar, FaClock, FaBicycle } from 'react-icons/fa';
import { summerData } from '../../data/summerData';

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4; // Change this to control the number of visible slides
  const autoPlaySpeed = 2000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % summerData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + summerData.length) % summerData.length);
  };

  useEffect(() => {
    const autoPlay = setInterval(nextSlide, autoPlaySpeed);
    return () => clearInterval(autoPlay); // Clean up interval on component unmount
  }, []);

  const visibleSlides = summerData.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  return (
    <>
      <h1 className="text-3xl font-bold mt-4 mb-2 pl-4">Summer Deals & Discounts</h1>
      <section className="relative mx-auto w-full max-w-[69rem] overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 absolute left-0 z-10"
          >
            &#10094;
          </button>

          <div className="flex overflow-hidden w-full transition-transform duration-700 ease-in-out" style={{ width: `calc(${slidesToShow * 25}% + ${slidesToShow}px)` }}>
            {visibleSlides.map((logo, index) => (
              <article key={index} className="p-4 min-w-[25%]">
                <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <div className="relative">
                    <span className="absolute top-0 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                      {logo.offPrice}
                    </span>
                    <span className="absolute top-10 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                      {logo.offPrice2}
                    </span>
                    <div className="h-[150px] w-[200px]">
                      <Image
                        src={logo.src}
                        alt={logo.title}
                        fill
                        className="object-cover transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default LogoCarousel;
