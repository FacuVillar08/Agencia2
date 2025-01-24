"use client";

import { Users, Award, Globe, Target, Plane, Heart, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto h-full px-4 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hacemos tus sueños de viaje realidad
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Más de una década creando experiencias únicas y memorables para viajeros de todo el mundo
          </p>
        </div>
      </section>

      {/* Misión y Valores */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground">
              Transformar tus viajes en experiencias extraordinarias, conectando culturas y creando recuerdos inolvidables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Alcance Global</h3>
                <p className="text-sm text-muted-foreground">
                  Presencia en más de 50 países y colaboración con los mejores proveedores locales.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Pasión por el Servicio</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicación total a la satisfacción del cliente y atención personalizada.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Innovación Constante</h3>
                <p className="text-sm text-muted-foreground">
                  Tecnología de vanguardia para una experiencia de viaje sin complicaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-sm text-muted-foreground">Destinos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <p className="text-sm text-muted-foreground">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Award className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Calidad Garantizada</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente cada proveedor y servicio para asegurar la mejor experiencia.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Equipo Experto</h3>
                <p className="text-muted-foreground">
                  Asesores de viaje con amplia experiencia y conocimiento de los destinos.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Servicio Personalizado</h3>
                <p className="text-muted-foreground">
                  Adaptamos cada viaje a tus preferencias y necesidades específicas.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Mejores Precios</h3>
                <p className="text-muted-foreground">
                  Tarifas competitivas y transparentes sin costos ocultos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestro Compromiso</h2>
            <p className="text-lg text-muted-foreground mb-8">
              En TravelPro, nos comprometemos a hacer de cada viaje una experiencia excepcional. 
              Nuestra pasión por los viajes y dedicación al servicio al cliente nos impulsa a 
              superar expectativas y crear momentos inolvidables.
            </p>
            <div className="inline-flex items-center gap-2 text-primary">
              <Plane className="h-5 w-5" />
              <span className="font-medium">Descubre el mundo con nosotros</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}