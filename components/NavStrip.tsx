"use client";
import React, { useRef, useState, useEffect } from 'react';
import { products } from '../data/ProductsData';

const NavStrip: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Group products by category and count the number of products in each category
  const categories = products.reduce((acc, product) => {
    const category = product.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtLeft(scrollLeft === 0);
      setIsAtRight(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const STICKY_NAVBAR_HEIGHT = 80; // well adjust thsi value based on the heights of our sticky navbars

  const handleCategoryClick = (category: string) => {
    const element = document.getElementById(category);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY; // the top of categories should be customized
      window.scrollTo({ top: elementTop - STICKY_NAVBAR_HEIGHT, behavior: 'smooth' }); // Scroll to the new pos...
      setActiveCategory(category);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const categoryElements = Object.keys(categories).map((category) =>
        document.getElementById(category)
      );
      categoryElements.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= STICKY_NAVBAR_HEIGHT && rect.bottom >= STICKY_NAVBAR_HEIGHT) {
            setActiveCategory(element.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [categories]);

  useEffect(() => {
    if (activeCategory && scrollRef.current) {
      const activeElement = scrollRef.current.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement;
      if (activeElement) {
        const { offsetWidth } = activeElement;

        // Adjust the scroll position based on the active element's position
        const scrollLeft = scrollRef.current.scrollLeft;
        const clientWidth = scrollRef.current.clientWidth;

        if (activeElement.offsetLeft + offsetWidth > scrollLeft + clientWidth) {
          scrollRef.current.scrollBy({ left: offsetWidth, behavior: 'smooth' });
        } else if (activeElement.offsetLeft < scrollLeft) {
          scrollRef.current.scrollBy({ left: -offsetWidth, behavior: 'smooth' });
        }
      }
    }
  }, [activeCategory]);

  return (
    <section className=" z-20">
      <div className="flex items-center justify-between p-4 my-6 gap-4 h-[50px]">
        <div className="relative hidden md:block">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2a8 8 0 105.293 14.293l4.12 4.12a1 1 0 001.414-1.414l-4.12-4.12A8 8 0 0010 2zm-6 8a6 6 0 1111.314 3.95l.022-.022a6 6 0 01-8.49-8.49L4.05 10H4z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search in Menu"
            className="w-[234px] h-[32px] pl-10 rounded-full bg-secondary-lighter text-sm font-semibold text-secondary p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Search button */}
        <div className="md:hidden">
          <button className="bg-white rounded-full p-2 shadow-lg hover:bg-secondary-lighter">
            <svg
              className="w-5 h-5 text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a8 8 0 105.293 14.293l4.12 4.12a1 1 0 001.414-1.414l-4.12-4.12A8 8 0 0010 2zm-6 8a6 6 0 1111.314 3.95l.022-.022a6 6 0 01-8.49-8.49L4.05 10H4z"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden flex-grow px-6 h-[50px] py-2">
          {!isAtLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-1  border p-3 border-secondary-lighter rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-secondary-lighter transition-all duration-200 hover:p-4 hover:-mx-1 z-5 "
            >
              <svg
                fill="#000000"
                width="15"
                height="15"
                viewBox="0 0 42 42"
                xmlSpace="preserve"
                transform="matrix(-1, 0, 0, 1, 0, 0)"

              >
                <g>
                  <polygon
                    fillRule="evenodd"
                    points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41"
                  />
                </g>
              </svg>

            </button>
          )}

          <div
            ref={scrollRef}
            className="flex items-center space-x-4 overflow-auto scrollbar-hide mx-6"
            onScroll={handleScroll}
          >
            {Object.entries(categories).map(([category, count]) => (
              <div
                key={category}
                data-category={category}
                className={`relative text-secondary font-semibold text-sm cursor-pointer h-[50px] whitespace-nowrap px-4 flex items-center justify-center group hover:bg-secondary-lighter hover:text-black transition-colors duration-200`}
                onClick={() => handleCategoryClick(category)}
              >
                {category} ({count})
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[3px] bg-black transition-all duration-300 ease-in-out group-hover:w-5 ${activeCategory === category ? 'w-full' : ''}`}
                ></span>
              </div>
            ))}
          </div>

          {!isAtRight && (
            <button
              onClick={scrollRight}
              className="absolute right-1 p-3 border border-gray-300 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all duration-200 hover:p-4 hover:-mx-1"
            >
              <svg
                fill="#000000"
                width="15"
                height="15"
                viewBox="0 0 42 42"
                xmlSpace="preserve"

              >
                <g>
                  <polygon
                    fillRule="evenodd"
                    points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41"
                  />
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavStrip;
