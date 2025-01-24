import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { CartProvider } from '@/components/cart/CartProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelPro - Tu Agencia de Viajes',
  description: 'Descubre los mejores destinos y experiencias para tus viajes inolvidables',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}