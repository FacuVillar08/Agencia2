'use client';

import { MapPin, Calendar, Users, Plane, Hotel, Ticket } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CartItem, TravelPackage } from '@/data/cartData';

interface TripSummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPackage: TravelPackage | null;
  items: CartItem[];
}

export function TripSummaryDialog({
  open,
  onOpenChange,
  selectedPackage,
  items = [],
}: TripSummaryDialogProps) {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Resumen de tu Viaje</DialogTitle>
          <DialogDescription>
            Detalles completos de tu itinerario
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {selectedPackage ? (
              <>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  {selectedPackage.image && (
                    <img
                      src={selectedPackage.image}
                      alt={selectedPackage.title || 'Imagen del paquete'}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">
                      {selectedPackage.title || 'Paquete sin título'}
                    </h3>
                    <p className="text-sm opacity-90">
                      {selectedPackage.description || 'Sin descripción'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Detalles del Viaje</h4>
                    <div className="space-y-2">
                      {selectedPackage.duration && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedPackage.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>2 personas</span>
                      </div>
                      {selectedPackage.destination && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedPackage.destination}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Servicios Incluidos</h4>
                    <div className="space-y-4">
                      {selectedPackage.flight && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Plane className="h-4 w-4" />
                            <span className="font-medium">Vuelo</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-6">
                            {selectedPackage.flight.title}
                          </p>
                        </div>
                      )}
                      {selectedPackage.hotel && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Hotel className="h-4 w-4" />
                            <span className="font-medium">Alojamiento</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-6">
                            {selectedPackage.hotel.title}
                          </p>
                        </div>
                      )}
                      {selectedPackage.attractions &&
                        selectedPackage.attractions.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Ticket className="h-4 w-4" />
                              <span className="font-medium">Atracciones</span>
                            </div>
                            <ul className="space-y-1 pl-6">
                              {selectedPackage.attractions.map(
                                (attraction, index) => (
                                  <li
                                    key={index}
                                    className="text-sm text-muted-foreground"
                                  >
                                    • {attraction.title}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                {Object.entries(
                  items.reduce((acc, item) => {
                    const destination =
                      item.details?.destination ||
                      item.details?.location ||
                      'Sin especificar';
                    if (!acc[destination]) {
                      acc[destination] = {
                        flights: [],
                        hotels: [],
                        attractions: [],
                      };
                    }
                    if (item.type === 'flight')
                      acc[destination].flights.push(item);
                    if (item.type === 'hotel')
                      acc[destination].hotels.push(item);
                    if (item.type === 'attraction')
                      acc[destination].attractions.push(item);
                    return acc;
                  }, {} as Record<string, { flights: CartItem[]; hotels: CartItem[]; attractions: CartItem[] }>)
                ).map(([city, destination]) => (
                  <div key={city} className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {city}
                    </h3>
                    <Separator />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {destination.flights.map((flight, index) => (
                          <div key={index}>
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Plane className="h-4 w-4" />
                              Vuelo
                            </h4>
                            <div className="pl-6 space-y-1 text-sm">
                              <p>{flight.title}</p>
                              {flight.details?.date && (
                                <p className="text-muted-foreground">
                                  Fecha: {flight.details.date}
                                </p>
                              )}
                              {flight.details?.departure &&
                                flight.details?.arrival && (
                                  <p className="text-muted-foreground">
                                    {flight.details.departure} -{' '}
                                    {flight.details.arrival}
                                  </p>
                                )}
                            </div>
                          </div>
                        ))}
                        {destination.hotels.map((hotel, index) => (
                          <div key={index}>
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Hotel className="h-4 w-4" />
                              Alojamiento
                            </h4>
                            <div className="pl-6 space-y-1 text-sm">
                              <p>{hotel.title}</p>
                              {hotel.details?.checkIn && (
                                <p className="text-muted-foreground">
                                  Check-in: {hotel.details.checkIn}
                                </p>
                              )}
                              {hotel.details?.checkOut && (
                                <p className="text-muted-foreground">
                                  Check-out: {hotel.details.checkOut}
                                </p>
                              )}
                              {hotel.details?.nights && (
                                <p className="text-muted-foreground">
                                  {hotel.details.nights} noches
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        {destination.attractions.length > 0 && (
                          <>
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Ticket className="h-4 w-4" />
                              Atracciones
                            </h4>
                            <div className="space-y-3">
                              {destination.attractions.map(
                                (attraction, index) => (
                                  <div
                                    key={index}
                                    className="pl-6 space-y-1 text-sm"
                                  >
                                    <p>{attraction.title}</p>
                                    {attraction.details?.date && (
                                      <p className="text-muted-foreground">
                                        Fecha: {attraction.details.date}
                                      </p>
                                    )}
                                    {attraction.details?.duration && (
                                      <p className="text-muted-foreground">
                                        Duración: {attraction.details.duration}
                                      </p>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
