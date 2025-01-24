import Link from "next/link";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-6 w-6" />
              <span className="font-bold text-xl">TravelPro</span>
            </div>
            <p className="text-gray-400">
              Tu agencia de viajes de confianza para descubrir el mundo de manera única y especial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-gray-400 hover:text-white">
                  Vuelos
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-400 hover:text-white">
                  Hospedajes
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-white">
                  Paquetes
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-400 hover:text-white">
                  Política de Cancelación
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@travelpro.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Travel Street, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}