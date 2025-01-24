"use client";

import { useState } from "react";
import { Search, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SearchSection from "@/components/home/SearchSection";
import { hotels } from "@/data/mockData";

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto h-full relative z-10">
          <div className="flex items-center justify-center h-full">
            <SearchSection variant="results" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{hotel.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {hotel.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{hotel.description}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{hotel.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold">${hotel.price}</span>
                  <span className="text-sm text-muted-foreground">/noche</span>
                </div>
                <Button>Reservar Ahora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}