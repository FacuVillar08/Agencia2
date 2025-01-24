'use client';

import { X, Calendar, Plane, Hotel, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TravelPackage } from '@/data/cartData';

interface PackageItemProps {
  package: TravelPackage;
  onRemove: () => void;
}

export function PackageItem({ package: pkg, onRemove }: PackageItemProps) {
  if (!pkg) return null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{pkg.title || 'Paquete sin título'}</CardTitle>
          <CardDescription>
            {pkg.description || 'Sin descripción'}
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={onRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pkg.image && (
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title || 'Imagen del paquete'}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  {pkg.duration || 'Duración no especificada'}
                </span>
              </div>
              {pkg.flight && (
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  <span className="text-sm">{pkg.flight.title}</span>
                </div>
              )}
              {pkg.hotel && (
                <div className="flex items-center gap-2">
                  <Hotel className="h-4 w-4" />
                  <span className="text-sm">{pkg.hotel.title}</span>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-medium mb-2">Atracciones incluidas:</h4>
              <ul className="space-y-1">
                {pkg.attractions?.map((attraction, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {attraction.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
