"use client";

import { useState } from "react";
import { Search, Plane, Clock, AlertCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import SearchSection from "@/components/home/SearchSection";
import { flights } from "@/data/mockData";

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
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
        <div className="space-y-6">
          {flights.map((flight) => (
            <Card key={flight.id} className="overflow-hidden">
              <CardHeader className="flex-col space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="flex flex-wrap items-center gap-2 mb-2">
                      <Plane className="h-5 w-5" />
                      <span>{flight.airline}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{flight.rating}</span>
                        <span className="text-muted-foreground">
                          ({flight.reviews} reseñas)
                        </span>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Vuelo directo • {flight.duration}
                    </CardDescription>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-bold">${flight.price}</div>
                    <div className="text-sm text-muted-foreground">por persona</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <p className="font-semibold text-lg">{flight.origin}</p>
                      <p className="text-sm text-muted-foreground">{flight.departure}</p>
                    </div>
                    <div className="hidden sm:block flex-1 px-4 relative">
                      <div className="border-t-2 border-dashed w-full absolute top-1/2 -translate-y-1/2" />
                      <div className="text-center relative">
                        <span className="bg-background px-2 text-sm text-muted-foreground">
                          {flight.duration}
                        </span>
                      </div>
                      {flight.stops > 0 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-background px-2 text-sm text-muted-foreground">
                            1 escala
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{flight.destination}</p>
                      <p className="text-sm text-muted-foreground">{flight.arrival}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Servicios incluidos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {flight.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Horarios disponibles:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {flight.schedule.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{schedule.days}:</span>
                          <span className="font-medium">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="bg-muted/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Precios y disponibilidad sujetos a cambios</span>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  Ver en aerolínea
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}