// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import { cityData } from "../data/cardData"; // Import cityData
import CityCard from "@/components/CityCard"; // Import CityCard component
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <section>
      <HeroSection />
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
        {cityData.map((data) => (
          <Link key={data.id} href={`/city/${data.cityName.toLowerCase()}`}>
            <CityCard
              id={data.id}
              image={data.image}
              title={data.cityName}
            />
          </Link>
        ))}
      </div>

    </section>
  );
}
