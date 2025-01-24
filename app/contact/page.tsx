"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-muted-foreground mb-8">
            Estamos aquí para ayudarte. Contáctanos por cualquier duda o consulta sobre nuestros servicios.
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-sm text-muted-foreground">+1 234 567 890</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">info@travelpro.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-sm text-muted-foreground">123 Travel Street, City</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <Input id="subject" placeholder="¿Sobre qué nos quieres consultar?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                  />
                </div>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}