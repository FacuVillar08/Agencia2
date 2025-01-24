'use client';

import { useState } from 'react';
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Users,
  Plus,
  Package,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import SearchSection from '@/components/home/SearchSection';
import PackageSimulator from '@/components/home/PackageSimulator';
import { predefinedPackages } from '@/data/cartData';
import { useCart } from '@/components/cart/CartProvider';
import { useRouter } from 'next/navigation';

export default function PackagesPage() {
  const router = useRouter();
  const { setPackage } = useCart();

  const handleSelectPackage = (pkg) => {
    setPackage(pkg);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800')",
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Paquetes Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(predefinedPackages || []).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">2 personas</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Incluye:</h4>
                      <ul className="space-y-1">
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          {pkg.flight.title}
                        </li>
                        <li className="text-sm text-muted-foreground flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          {pkg.hotel.title}
                        </li>
                        <li className="text-sm text-muted-foreground">
                          +{pkg.attractions.length} atracciones
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">${pkg.price}</span>
                    <span className="text-sm text-muted-foreground">
                      /persona
                    </span>
                  </div>
                  <Button onClick={() => handleSelectPackage(pkg)}>
                    Reservar Ahora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">
              ¿No encuentras el paquete perfecto?
            </h2>
            <p className="text-muted-foreground">
              Diseña tu propia experiencia de viaje seleccionando vuelos,
              hoteles y atracciones a tu medida
            </p>
            <PackageSimulator />
          </div>
        </section>
      </div>
    </main>
  );
}
