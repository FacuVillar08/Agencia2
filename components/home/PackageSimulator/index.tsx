"use client";

import { useState, useEffect } from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";
import { availableFlights, availableHotels, availableAttractions } from "@/data/cartData";
import { ExistingCartDialog } from "@/components/cart/ExistingCartDialog";
import { TravelersSection } from "./TravelersSection";
import { DestinationForm } from "./DestinationForm";
import { TotalSummary } from "./TotalSummary";
import { differenceInDays } from "date-fns";

interface Destination {
  id: string;
  city: string;
  flight: string;
  hotel: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  attractions: string[];
}

interface PackageSimulatorProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialDestinations?: Destination[];
}

const defaultDestination: Destination = {
  id: "dest-1",
  city: "",
  flight: "",
  hotel: "",
  startDate: undefined,
  endDate: undefined,
  attractions: []
};

export default function PackageSimulator({
  isOpen: controlledIsOpen = false,
  onOpenChange: controlledOnOpenChange,
  initialDestinations = []
}: PackageSimulatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showExistingCartDialog, setShowExistingCartDialog] = useState(false);
  const [travelers, setTravelers] = useState({ adults: "2", children: "0" });
  const [destinations, setDestinations] = useState<Destination[]>([{ ...defaultDestination }]);

  const router = useRouter();
  const { items = [], package: selectedPackage, addItem, clearCart } = useCart();

  const dialogIsOpen = typeof controlledIsOpen === 'boolean' ? controlledIsOpen : isOpen;
  const setDialogIsOpen = controlledOnOpenChange || setIsOpen;

  useEffect(() => {
    if (Array.isArray(initialDestinations) && initialDestinations.length > 0) {
      setDestinations(initialDestinations);
    }
  }, [initialDestinations]);

  const handleOpenSimulator = () => {
    if (selectedPackage || (Array.isArray(items) && items.length > 0)) {
      setShowExistingCartDialog(true);
    } else {
      setDialogIsOpen(true);
    }
  };

  const handleClearAndContinue = () => {
    clearCart();
    setShowExistingCartDialog(false);
    setDialogIsOpen(true);
  };

  const handleKeepBoth = () => {
    setShowExistingCartDialog(false);
    setDialogIsOpen(true);
  };

  const handleAddDestination = () => {
    const lastDest = destinations[destinations.length - 1];
    const newStartDate = lastDest?.endDate ? new Date(lastDest.endDate) : undefined;

    setDestinations(prev => [...prev, {
      ...defaultDestination,
      id: `dest-${prev.length + 1}`,
      startDate: newStartDate,
      endDate: newStartDate ? new Date(newStartDate.setDate(newStartDate.getDate() + 3)) : undefined,
    }]);
  };

  const handleRemoveDestination = (id: string) => {
    if (destinations.length > 1) {
      setDestinations(prev => prev.filter(dest => dest.id !== id));
    }
  };

  const updateDestination = (id: string, field: keyof Destination, value: any) => {
    setDestinations(prev => prev.map(dest => {
      if (dest.id === id) {
        const updatedDest = { ...dest, [field]: value };
        
        if (field === 'startDate' && updatedDest.endDate && value > updatedDest.endDate) {
          updatedDest.endDate = new Date(value.setDate(value.getDate() + 1));
        }
        
        if (field === 'endDate' && updatedDest.startDate && value < updatedDest.startDate) {
          updatedDest.startDate = value;
        }

        return updatedDest;
      }
      return dest;
    }));
  };

  const calculateTotal = () => {
    if (!Array.isArray(destinations)) return 0;
    
    return destinations.reduce((total, dest) => {
      let destTotal = 0;
      const flight = availableFlights.find(f => f.id === dest.flight);
      const hotel = availableHotels.find(h => h.id === dest.hotel);
      const attractions = availableAttractions.filter(a => 
        Array.isArray(dest.attractions) && dest.attractions.includes(a.id)
      );
      
      const days = dest.startDate && dest.endDate 
        ? differenceInDays(dest.endDate, dest.startDate) + 1 
        : 0;

      if (flight) destTotal += flight.price;
      if (hotel) destTotal += hotel.price * days;
      destTotal += attractions.reduce((sum, attr) => sum + attr.price, 0);

      return total + destTotal;
    }, 0);
  };

  const handleAddCustomPackage = () => {
    if (!Array.isArray(destinations)) return;

    const isValid = destinations.every(dest => 
      dest.city && dest.flight && dest.hotel && dest.startDate && dest.endDate
    );

    if (!isValid) {
      alert("Por favor completa todos los campos requeridos para cada destino");
      return;
    }

    const hasValidDates = destinations.every((dest, index) => {
      if (index === 0) return true;
      const prevDest = destinations[index - 1];
      return dest.startDate && prevDest.endDate && 
             dest.startDate >= prevDest.endDate;
    });

    if (!hasValidDates) {
      alert("Las fechas de los destinos deben ser consecutivas");
      return;
    }

    destinations.forEach(destination => {
      const selectedFlight = availableFlights.find(f => f.id === destination.flight);
      const selectedHotel = availableHotels.find(h => h.id === destination.hotel);
      const selectedAttractions = availableAttractions.filter(a => 
        Array.isArray(destination.attractions) && destination.attractions.includes(a.id)
      );

      const days = destination.startDate && destination.endDate 
        ? differenceInDays(destination.endDate, destination.startDate) + 1 
        : 0;

      if (selectedFlight) {
        addItem({
          ...selectedFlight,
          id: `${selectedFlight.id}-${destination.id}`,
          details: {
            ...selectedFlight.details,
            date: destination.startDate?.toLocaleDateString('es-ES')
          }
        });
      }

      if (selectedHotel) {
        addItem({
          ...selectedHotel,
          id: `${selectedHotel.id}-${destination.id}`,
          price: selectedHotel.price * days,
          details: {
            ...selectedHotel.details,
            checkIn: destination.startDate?.toLocaleDateString('es-ES'),
            checkOut: destination.endDate?.toLocaleDateString('es-ES'),
            nights: days
          }
        });
      }

      if (Array.isArray(selectedAttractions)) {
        selectedAttractions.forEach(attraction => {
          addItem({
            ...attraction,
            id: `${attraction.id}-${destination.id}`,
            details: {
              ...attraction.details,
              date: destination.startDate?.toLocaleDateString('es-ES')
            }
          });
        });
      }
    });

    setDialogIsOpen(false);
    router.push('/cart');
  };

  return (
    <>
      {!controlledIsOpen && (
        <div className="text-center mt-8 px-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleOpenSimulator}
            className="w-full sm:w-auto bg-white/95 hover:bg-gray-100 text-gray-900 border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Plus className="h-4 w-4 flex-shrink-0" />
              <span>Arma tu propio paquete aquí</span>
            </div>
          </Button>
        </div>
      )}

      <ExistingCartDialog
        open={showExistingCartDialog}
        onOpenChange={setShowExistingCartDialog}
        onContinue={handleKeepBoth}
        onClear={handleClearAndContinue}
      />

      <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
        <DialogContent className="w-[95vw] max-w-4xl h-[90vh] p-0">
          <ScrollArea className="h-full">
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl">Diseña tu Viaje Multi-Destino</DialogTitle>
                <DialogDescription className="text-sm sm:text-base">
                  Crea tu itinerario perfecto seleccionando múltiples destinos, hoteles y atracciones
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-8">
                <TravelersSection
                  travelers={travelers}
                  onTravelersChange={(field, value) => 
                    setTravelers(prev => ({ ...prev, [field]: value }))
                  }
                />

                <div className="space-y-6">
                  {Array.isArray(destinations) && destinations.map((destination, index) => (
                    <DestinationForm
                      key={destination.id}
                      destination={destination}
                      index={index}
                      totalDestinations={destinations.length}
                      onUpdate={updateDestination}
                      onRemove={handleRemoveDestination}
                      prevEndDate={index > 0 ? destinations[index - 1].endDate : undefined}
                      nextStartDate={
                        index < destinations.length - 1 
                          ? destinations[index + 1].startDate 
                          : undefined
                      }
                    />
                  ))}

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleAddDestination}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Otro Destino
                  </Button>
                </div>

                <TotalSummary
                  total={calculateTotal()}
                  travelers={travelers}
                />
              </div>

              <DialogFooter className="mt-8">
                <Button variant="outline" onClick={() => setDialogIsOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCustomPackage}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </DialogFooter>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}