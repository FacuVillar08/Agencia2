'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/cart/CartProvider';
import { Button } from '@/components/ui/button';
import {
  Edit,
  ShoppingBag,
  Package,
  Plus,
  Calendar,
  Users,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { predefinedPackages } from '@/data/cartData';
import { CartItem } from '@/components/cart/CartItem';
import { PackageItem } from '@/components/cart/PackageItem';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { TripSummaryDialog } from '@/components/cart/TripSummaryDialog';

export default function CartPage() {
  const router = useRouter();
  const {
    items = [],
    package: selectedPackage,
    total = 0,
    removeItem,
    setPackage,
    clearCart,
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [showTripSummary, setShowTripSummary] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = async () => {
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    clearCart();
    router.push('/');
  };

  if (!mounted) return null;

  const hasItems = selectedPackage || items.length > 0;

  if (!hasItems) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="text-center py-16 mb-16">
              <CardContent className="max-w-md mx-auto space-y-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <ShoppingBag className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    ¡Descubre nuestros increíbles paquetes de viaje o crea tu
                    propia aventura personalizada!
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="w-full max-w-sm space-y-4">
                    <Button
                      onClick={() => router.push('/packages')}
                      className="w-full"
                      size="lg"
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Ver Paquetes
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    ¿Necesitas ayuda? Contáctanos al{' '}
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:underline"
                    >
                      +1 234 567 890
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <section>
              <h3 className="text-2xl font-bold mb-6">Paquetes Destacados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {predefinedPackages.map((pkg) => (
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
                      <p className="text-sm text-muted-foreground">
                        {pkg.description}
                      </p>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold">${pkg.price}</span>
                        <span className="text-sm text-muted-foreground">
                          /persona
                        </span>
                      </div>
                      <Button onClick={() => setPackage(pkg)}>
                        Seleccionar
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Tu Carrito</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {selectedPackage ? (
                  <PackageItem
                    package={selectedPackage}
                    onRemove={() => setPackage(null)}
                  />
                ) : (
                  items.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={removeItem} />
                  ))
                )}
              </div>

              <div className="lg:col-span-1">
                <OrderSummary
                  total={total}
                  isProcessing={isProcessing}
                  onCheckout={handleCheckout}
                  onShowSummary={() => setShowTripSummary(true)}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <TripSummaryDialog
        open={showTripSummary}
        onOpenChange={setShowTripSummary}
        selectedPackage={selectedPackage}
        items={items}
      />
    </div>
  );
}
