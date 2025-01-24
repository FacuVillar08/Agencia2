"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Plane, 
  Hotel, 
  Package, 
  Phone, 
  ShoppingCart,
  Menu,
  X,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const mainLinks = [
  { href: "/flights", icon: Plane, label: "Vuelos" },
  { href: "/hotels", icon: Hotel, label: "Hospedajes" },
  { href: "/packages", icon: Package, label: "Paquetes" },
];

const notifications = [
  {
    title: "¡Oferta Flash!",
    description: "50% de descuento en vuelos a Europa",
    date: "Termina en 24h"
  },
  {
    title: "Paquetes 2x1",
    description: "En destinos seleccionados del Caribe",
    date: "Hasta fin de mes"
  },
  {
    title: "Hoteles Premium",
    description: "3 noches al precio de 2 en resorts 5 estrellas",
    date: "Últimos días"
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items, package: selectedPackage } = useCart();

  const cartItemCount = selectedPackage ? 1 : items.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo and Main Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">TravelPro</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 h-12 px-4 font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                align="end" 
                className="w-80 p-0"
                sideOffset={8}
              >
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <span className="font-medium">Notificaciones</span>
                  <span className="text-xs text-muted-foreground">Ofertas especiales</span>
                </div>
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-3 hover:bg-muted cursor-pointer transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{notification.title}</span>
                        <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                          {notification.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {notification.description}
                      </p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:bg-muted rounded-md"
                >
                  <Phone className="h-4 w-4" />
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}