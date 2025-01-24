"use client";

import { Plane, Hotel, Package } from "lucide-react";

interface LoaderProps {
  type: "flights" | "hotels" | "packages";
}

export function Loader({ type }: LoaderProps) {
  const Icon = type === "flights" ? Plane : type === "hotels" ? Hotel : Package;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Icon className="h-8 w-8 text-primary animate-bounce" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-sm animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground">Buscando los mejores {type === "flights" ? "vuelos" : type === "hotels" ? "hoteles" : "paquetes"}...</p>
      </div>
    </div>
  );
}