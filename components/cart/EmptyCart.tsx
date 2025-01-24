"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function EmptyCart() {
  const router = useRouter();

  return (
    <Card className="text-center py-12">
      <CardContent className="space-y-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <ShoppingBag className="h-8 w-8 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Tu carrito está vacío</h3>
          <p className="text-muted-foreground">
            ¡Explora nuestros paquetes de viaje y encuentra tu próxima aventura!
          </p>
        </div>
        <Button onClick={() => router.push('/packages')}>
          Ver Paquetes Disponibles
        </Button>
      </CardContent>
    </Card>
  );
}