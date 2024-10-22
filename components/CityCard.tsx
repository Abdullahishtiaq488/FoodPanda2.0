import React from 'react';
import Image from 'next/image';

interface CityCardProps {
    id: number;
    image: any;
    title: string;
}

const CityCard: React.FC<CityCardProps> = ({ image, title }) => {
    return (
        <div className="relative border border-gray-300 rounded-lg shadow-md w-auto h-[156px] md:h-[256px] overflow-hidden">
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-200 hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 bg-white text-gray-600 px-3 py-2 rounded-lg text-sm md:text-lg font-semibold shadow-md">
                {title}
            </span>

        </div>
    );
};

export default CityCard;
