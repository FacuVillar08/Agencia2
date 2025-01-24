'use client';

import SearchSection from '@/components/home/SearchSection';
import dynamic from 'next/dynamic';

const FeaturedDestinations = dynamic(
  () => import('@/components/home/FeaturedDestinations'),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-muted animate-pulse" />,
  }
);

const PopularPackages = dynamic(
  () => import('@/components/home/PopularPackages'),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] bg-muted animate-pulse" />,
  }
);

const PackageSimulator = dynamic(
  () => import('@/components/home/PackageSimulator/index.tsx'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Descubre el mundo con nosotros
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Los mejores destinos y experiencias para tus viajes inolvidables
          </p>

          {/* Search Section */}
          <SearchSection />

          {/* Package Simulator */}
          <PackageSimulator />
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Popular Packages */}
      <PopularPackages />
    </main>
  );
}
