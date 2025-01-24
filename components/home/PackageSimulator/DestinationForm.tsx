"use client";

import { X, Calendar, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { availableFlights, availableHotels, availableAttractions } from "@/data/cartData";
import { Card, CardContent } from "@/components/ui/card";

const cities = Array.from(new Set([
  "París",
  "Roma",
  "Barcelona",
  "Londres",
  "Amsterdam"
]));

interface Destination {
  id: string;
  city: string;
  flight: string;
  hotel: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  attractions: string[];
}

interface DestinationFormProps {
  destination: Destination;
  index: number;
  totalDestinations: number;
  onUpdate: (id: string, field: keyof Destination, value: any) => void;
  onRemove: (id: string) => void;
  prevEndDate?: Date;
  nextStartDate?: Date;
}

export function DestinationForm({
  destination,
  index,
  totalDestinations,
  onUpdate,
  onRemove,
  prevEndDate,
  nextStartDate
}: DestinationFormProps) {
  const attractions = availableAttractions || [];
  const flights = availableFlights || [];
  const hotels = availableHotels || [];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
              Destino {index + 1}
            </span>
          </h3>
          {totalDestinations > 1 && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(destination.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Ciudad</label>
              <Select
                value={destination.city}
                onValueChange={(value) => onUpdate(destination.id, 'city', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Llegada</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-10 px-3 justify-start"
                    >
                      <div className="flex items-center w-full">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">
                          {destination.startDate ? (
                            format(destination.startDate, "dd MMM", { locale: es })
                          ) : (
                            "Llegada"
                          )}
                        </span>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={destination.startDate}
                      onSelect={(date) => onUpdate(destination.id, 'startDate', date)}
                      initialFocus
                      locale={es}
                      disabled={(date) => {
                        if (date < new Date()) return true;
                        if (prevEndDate) return date < prevEndDate;
                        return false;
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Salida</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-10 px-3 justify-start"
                    >
                      <div className="flex items-center w-full">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">
                          {destination.endDate ? (
                            format(destination.endDate, "dd MMM", { locale: es })
                          ) : (
                            "Salida"
                          )}
                        </span>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={destination.endDate}
                      onSelect={(date) => onUpdate(destination.id, 'endDate', date)}
                      initialFocus
                      locale={es}
                      disabled={(date) => {
                        if (destination.startDate && date < destination.startDate) return true;
                        if (nextStartDate) return date > nextStartDate;
                        return false;
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Vuelo</label>
              <Select
                value={destination.flight}
                onValueChange={(value) => onUpdate(destination.id, 'flight', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un vuelo" />
                </SelectTrigger>
                <SelectContent>
                  {flights.map(flight => (
                    <SelectItem key={flight.id} value={flight.id}>
                      {flight.title} - ${flight.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Hotel</label>
              <Select
                value={destination.hotel}
                onValueChange={(value) => onUpdate(destination.id, 'hotel', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un hotel" />
                </SelectTrigger>
                <SelectContent>
                  {hotels.map(hotel => (
                    <SelectItem key={hotel.id} value={hotel.id}>
                      {hotel.title} - ${hotel.price}/noche
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Atracciones</label>
            <div className="space-y-2">
              {attractions.map(attraction => (
                <div
                  key={attraction.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4" />
                    <div>
                      <p className="font-medium">{attraction.title}</p>
                      <p className="text-sm text-muted-foreground">${attraction.price}</p>
                    </div>
                  </div>
                  <Button
                    variant={destination.attractions?.includes(attraction.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      const newAttractions = destination.attractions?.includes(attraction.id)
                        ? destination.attractions.filter(id => id !== attraction.id)
                        : [...(destination.attractions || []), attraction.id];
                      onUpdate(destination.id, 'attractions', newAttractions);
                    }}
                  >
                    {destination.attractions?.includes(attraction.id) ? "Añadido" : "Añadir"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {destination.startDate && destination.endDate && (
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Duración de la estancia: {differenceInDays(destination.endDate, destination.startDate) + 1} días
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}