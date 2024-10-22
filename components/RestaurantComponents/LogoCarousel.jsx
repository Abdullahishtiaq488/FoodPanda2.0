import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { FaStar, FaClock, FaBicycle } from 'react-icons/fa';
import { summerData } from '../../data/summerData';

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4; // Number of slides to show at once
  const autoPlaySpeed = 3000; // Time interval for autoplay in milliseconds

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % summerData.length);
    }, autoPlaySpeed);

    return () => clearInterval(autoPlay);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % summerData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + summerData.length) % summerData.length);
  };

  const visibleSlides = summerData.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  // To handle the wrapping effect if the currentIndex exceeds the data length
  const wrappedSlides = visibleSlides.length < slidesToShow
    ? [...visibleSlides, ...summerData.slice(0, slidesToShow - visibleSlides.length)]
    : visibleSlides;

  return (
    <div className="max-w-[69rem] mx-auto p-4 relative">
      <h1 className="text-3xl font-bold mb-4">Summer Deals & Discounts</h1>
      <div className="flex items-center justify-center relative">
        {/* Previous Slide Button */}
        <button
          className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {wrappedSlides.map((logo, index) => (
              <article key={index} className="flex-shrink-0 w-1/4 p-4">
                <Card className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <div className="relative">
                    <span className="absolute top-0 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                      {logo.offPrice}
                    </span>
                    <span className="absolute top-10 left-0 bg-red-600 text-white p-2 rounded-br-lg text-xs font-semibold z-50">
                      {logo.offPrice2}
                    </span>
                    <div className="h-[150px] w-[200px] relative">
                      <Image
                        src={logo.src}
                        alt={logo.title || 'Image of a deal'}
                        fill
                        className="object-cover transition duration-500 ease-in-out hover:scale-105 cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{logo.title}</h3>
                      <div className="flex items-center space-x-2">
                        <FaStar className={`text-yellow-500 ${logo.rating >= 4 ? 'fill-current' : 'opacity-40'}`} />
                        <span className="text-sm text-gray-600">({logo.rating})</span>
                      </div>
                    </div>

                    <CardDescription className="text-gray-500">{logo.description}</CardDescription>

                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-1 text-gray-500" />
                        <span>{logo.time}</span>
                      </div>
                      <div className="flex items-center text-green-600">
                        <FaBicycle className="mr-1 text-green-500" />
                        <span>{logo.delivery}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>

        {/* Next Slide Button */}
        <button
          className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default LogoCarousel;
