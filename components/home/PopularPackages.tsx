"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Users, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { popularPackages } from "@/data/mockData";
import { useCart } from "@/components/cart/CartProvider";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PopularPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [travelers, setTravelers] = useState({ adults: "2", children: "0" });
  const { setPackage } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!selectedPackage) return;

    setPackage(selectedPackage);
    
    toast.success("Paquete añadido al carrito", {
      description: (
        <div className="flex flex-col gap-2">
          <p>{selectedPackage.title} para {parseInt(travelers.adults) + parseInt(travelers.children)} viajeros</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setSelectedPackage(null)}>
              Seguir navegando
            </Button>
            <Button size="sm" onClick={() => router.push("/cart")}>
              Ir al carrito
            </Button>
          </div>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Paquetes Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>2 personas</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">${pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">por persona</span>
                  </div>
                  <Button onClick={() => setSelectedPackage(pkg)}>Ver Más</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedPackage !== null} onOpenChange={() => setSelectedPackage(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPackage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPackage.title}</DialogTitle>
                <DialogDescription>
                  {selectedPackage.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">El paquete incluye:</h4>
                      <ul className="space-y-2">
                        {selectedPackage.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Información importante:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Los precios pueden variar según la temporada</li>
                        <li>Se requiere un depósito del 20% para confirmar</li>
                        <li>Cancelación gratuita hasta 30 días antes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Selecciona los viajeros:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm mb-1.5 block">Adultos</label>
                          <Select
                            value={travelers.adults}
                            onValueChange={(value) => setTravelers(prev => ({ ...prev, adults: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5,6].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm mb-1.5 block">Niños</label>
                          <Select
                            value={travelers.children}
                            onValueChange={(value) => setTravelers(prev => ({ ...prev, children: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[0,1,2,3,4].map(num => (
                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Precio por persona:</span>
                        <span>${selectedPackage.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Número de viajeros:</span>
                        <span>{parseInt(travelers.adults) + parseInt(travelers.children)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                        <span>Total:</span>
                        <span>
                          ${(parseInt(travelers.adults) + parseInt(travelers.children)) * selectedPackage.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}