"use client";

import { X, MapPin, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CartItem as CartItemType } from "@/data/cartData";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>
            {item.type === 'flight' && 'Vuelo'}
            {item.type === 'hotel' && 'Alojamiento'}
            {item.type === 'attraction' && 'Atracción'}
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={() => onRemove(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {item.image && (
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="grid gap-2">
            {item.type === 'flight' && (
              <>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Destino: {item.details.destination}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Fecha: {item.details.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Salida: {item.details.departure} - Llegada: {item.details.arrival}
                  </span>
                </div>
              </>
            )}
            {item.type === 'hotel' && (
              <>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ubicación: {item.details.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Check-in: {item.details.checkIn} - Check-out: {item.details.checkOut}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Rating: {item.details.rating}</span>
                </div>
              </>
            )}
            {item.type === 'attraction' && (
              <>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ubicación: {item.details.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Fecha: {item.details.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Duración: {item.details.duration}</span>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              {item.type === 'hotel' && (
                <Badge variant="secondary">
                  {item.details.nights} noches
                </Badge>
              )}
            </div>
            <span className="font-semibold">${item.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}