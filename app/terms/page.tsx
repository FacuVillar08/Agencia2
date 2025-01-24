"use client";

import { Scale, FileCheck, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
            <p className="text-muted-foreground">
              Al utilizar nuestros servicios, aceptas estos términos y condiciones. Por favor, léelos cuidadosamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Scale className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Marco Legal</h3>
                <p className="text-sm text-muted-foreground">
                  Cumplimos con todas las regulaciones aplicables.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileCheck className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Transparencia</h3>
                <p className="text-sm text-muted-foreground">
                  Términos claros y comprensibles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <AlertCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Responsabilidad</h3>
                <p className="text-sm text-muted-foreground">
                  Derechos y obligaciones definidos.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground mb-4">
                Al acceder y utilizar nuestros servicios, aceptas estar vinculado por estos términos y condiciones, nuestra política de privacidad y cualquier directriz adicional.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Servicios de Viaje</h2>
              <p className="text-muted-foreground mb-4">
                Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Reservas de vuelos, hoteles y paquetes turísticos</li>
                <li>Servicios de transporte y traslados</li>
                <li>Actividades y excursiones</li>
                <li>Seguros de viaje</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Reservas y Pagos</h2>
              <p className="text-muted-foreground mb-4">
                Condiciones de reserva:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Las reservas están sujetas a disponibilidad</li>
                <li>Los precios pueden variar sin previo aviso</li>
                <li>Se requiere un depósito para confirmar la reserva</li>
                <li>Aceptamos múltiples métodos de pago</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Responsabilidades</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Nuestras Responsabilidades:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Proporcionar los servicios reservados</li>
                    <li>Mantener la información actualizada</li>
                    <li>Proteger los datos del cliente</li>
                    <li>Brindar soporte al cliente</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Responsabilidades del Cliente:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Proporcionar información precisa</li>
                    <li>Cumplir con los requisitos de viaje</li>
                    <li>Respetar las políticas de cancelación</li>
                    <li>Mantener documentación actualizada</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Modificaciones y Cancelaciones</h2>
              <p className="text-muted-foreground mb-4">
                Políticas generales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Las modificaciones están sujetas a disponibilidad</li>
                <li>Pueden aplicar cargos por cambios</li>
                <li>Consulta nuestra política de cancelación específica</li>
                <li>Algunas tarifas no son reembolsables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Para consultas sobre estos términos:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Email: legal@travelpro.com</p>
                <p className="text-sm text-muted-foreground">Teléfono: +1 234 567 890</p>
                <p className="text-sm text-muted-foreground">Dirección: 123 Travel Street, City</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}