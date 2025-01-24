"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";

interface ExistingCartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  onClear: () => void;
}

export function ExistingCartDialog({
  open,
  onOpenChange,
  onContinue,
  onClear,
}: ExistingCartDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Carrito con Items Existentes
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ya tienes un paquete o items en tu carrito. ¿Deseas eliminar el contenido actual y continuar con un nuevo paquete?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogCancel onClick={() => onOpenChange(false)} className="mt-0">
            Cancelar
          </AlertDialogCancel>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <AlertDialogAction onClick={onClear} className="w-full sm:w-auto">
              Eliminar y Continuar
            </AlertDialogAction>
            <AlertDialogAction onClick={onContinue} className="w-full sm:w-auto">
              Mantener Ambos
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}