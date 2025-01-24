"use client";

import { Ban, RefreshCw, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Política de Cancelación</h1>
            <p className="text-muted-foreground">
              Entendemos que los planes pueden cambiar. Conoce nuestras políticas de cancelación y modificación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Ban className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Cancelación Flexible</h3>
                <p className="text-sm text-muted-foreground">
                  Cancela sin cargo hasta 48 horas antes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <RefreshCw className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Modificaciones</h3>
                <p className="text-sm text-muted-foreground">
                  Cambios sujetos a disponibilidad.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Plazos</h3>
                <p className="text-sm text-muted-foreground">
                  Tiempos claros para cada servicio.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Política General</h2>
              <p className="text-muted-foreground mb-4">
                Nuestra política de cancelación está diseñada para ser justa y transparente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancelación gratuita hasta 48 horas antes de la fecha de inicio</li>
                <li>Reembolso del 50% hasta 24 horas antes</li>
                <li>No reembolsable dentro de las 24 horas previas</li>
                <li>Casos de fuerza mayor serán evaluados individualmente</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Cancelación por Tipo de Servicio</h2>
              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Vuelos</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Tarifa flexible: Cancelación gratuita hasta 72 horas antes</li>
                    <li>Tarifa estándar: 50% de cargo por cancelación</li>
                    <li>Tarifa económica: No reembolsable</li>
                  </ul>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Hoteles</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Cancelación gratuita hasta 7 días antes</li>
                    <li>Una noche de cargo entre 7 y 2 días antes</li>
                    <li>No reembolsable dentro de las 48 horas</li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Paquetes</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Reembolso completo hasta 30 días antes</li>
                    <li>70% de reembolso entre 30 y 15 días antes</li>
                    <li>50% de reembolso entre 14 y 7 días antes</li>
                    <li>No reembolsable dentro de los 7 días previos</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Modificaciones</h2>
              <p className="text-muted-foreground mb-4">
                Condiciones para cambios en las reservas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Un cambio gratuito hasta 7 días antes</li>
                <li>Cambios posteriores sujetos a cargo administrativo</li>
                <li>Diferencia de tarifa aplicable en todos los casos</li>
                <li>Sujeto a disponibilidad</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Reembolsos</h2>
              <p className="text-muted-foreground mb-4">
                Proceso de reembolso:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Procesamiento en 10-15 días hábiles</li>
                <li>Mismo método de pago original</li>
                <li>Notificación por email del estado del reembolso</li>
                <li>Posibilidad de crédito para futuro viaje</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Para solicitudes de cancelación o modificación:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Email: cancellations@travelpro.com</p>
                <p className="text-sm text-muted-foreground">Teléfono: +1 234 567 890</p>
                <p className="text-sm text-muted-foreground">Horario: 24/7</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}