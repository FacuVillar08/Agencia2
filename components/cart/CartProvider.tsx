"use client";

import { createContext, useContext, useState } from "react";
import { CartItem, TravelPackage } from "@/data/cartData";

interface CartContextType {
  items: CartItem[];
  package: TravelPackage | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  setPackage: (pkg: TravelPackage | null) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const addItem = (newItem: CartItem) => {
    setItems(prev => {
      // Verificar si el item ya existe
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        // Si existe, retornar el array sin cambios
        return prev;
      }
      // Si no existe, agregar el nuevo item
      return [...prev, { ...newItem }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const setPackage = (pkg: TravelPackage | null) => {
    setSelectedPackage(pkg);
    // Limpiar items individuales cuando se selecciona un paquete
    if (pkg) {
      setItems([]);
    }
  };

  const clearCart = () => {
    setItems([]);
    setSelectedPackage(null);
  };

  const total = selectedPackage 
    ? selectedPackage.price 
    : items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        package: selectedPackage,
        addItem,
        removeItem,
        setPackage,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}