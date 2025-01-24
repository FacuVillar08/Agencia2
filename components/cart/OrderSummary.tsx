"use client";

import { CreditCard, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OrderSummaryProps {
  total: number;
  isProcessing: boolean;
  onCheckout: () => void;
  onShowSummary: () => void;
}

export function OrderSummary({ total, isProcessing, onCheckout, onShowSummary }: OrderSummaryProps) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Resumen del Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={onCheckout}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Procesando...
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Proceder al Pago
            </>
          )}
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={onShowSummary}
        >
          <Info className="mr-2 h-4 w-4" />
          Ver Resumen del Viaje
        </Button>
      </CardContent>
    </Card>
  );
}