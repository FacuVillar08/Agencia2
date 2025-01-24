"use client";

import { MapPin, Star } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuredDestinations } from "@/data/mockData";

const FeaturedDestinations = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Destinos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDestinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {destination.title}
              </CardTitle>
              <CardDescription>{destination.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating}</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Desde ${destination.price}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;