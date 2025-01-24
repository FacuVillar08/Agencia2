"use client";

import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-muted-foreground">
              Tu privacidad es importante para nosotros. Conoce cómo recopilamos y protegemos tu información.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Protección de Datos</h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos medidas de seguridad avanzadas para proteger tu información.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Lock className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Seguridad</h3>
                <p className="text-sm text-muted-foreground">
                  Tus datos están cifrados y almacenados de forma segura.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Transparencia</h3>
                <p className="text-sm text-muted-foreground">
                  Claridad en cómo utilizamos y protegemos tu información.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground mb-4">
                Recopilamos información cuando reservas un viaje, creas una cuenta o utilizas nuestros servicios:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Información personal (nombre, dirección, email)</li>
                <li>Detalles de pago y facturación</li>
                <li>Preferencias de viaje</li>
                <li>Información del dispositivo y navegación</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Procesar tus reservas y pagos</li>
                <li>Personalizar tu experiencia</li>
                <li>Mejorar nuestros servicios</li>
                <li>Comunicarnos contigo sobre ofertas especiales</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de seguridad para proteger tu información:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cifrado SSL en todas las transmisiones de datos</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
                <li>Cumplimiento con estándares de la industria</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Tus Derechos</h2>
              <p className="text-muted-foreground mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acceder a tu información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Presentar una reclamación ante la autoridad de protección de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Para cualquier consulta sobre nuestra política de privacidad:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Email: privacy@travelpro.com</p>
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