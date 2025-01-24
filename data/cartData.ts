// Tipos de datos para el carrito
export interface CartItem {
  id: string;
  type: 'flight' | 'hotel' | 'attraction';
  title: string;
  price: number;
  image?: string;
  details: {
    destination?: string;
    location?: string;
    date?: string;
    departure?: string;
    arrival?: string;
    checkIn?: string;
    checkOut?: string;
    nights?: number;
    duration?: string;
    rating?: number;
    class?: string;
    airline?: string;
  };
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  flight: CartItem;
  hotel: CartItem;
  attractions: CartItem[];
}

export const availableFlights: CartItem[] = [
  {
    id: 'flight-1',
    type: 'flight',
    title: 'Madrid - París',
    price: 199,
    details: {
      destination: 'París',
      airline: 'Air Europa',
      departure: '10:00 AM',
      arrival: '12:30 PM',
      class: 'Económica',
    },
  },
  {
    id: 'flight-2',
    type: 'flight',
    title: 'Barcelona - París',
    price: 179,
    details: {
      destination: 'París',
      airline: 'Iberia',
      departure: '2:00 PM',
      arrival: '4:20 PM',
      class: 'Económica',
    },
  },
];

export const availableHotels: CartItem[] = [
  {
    id: 'hotel-1',
    type: 'hotel',
    title: 'Grand Hotel Paris',
    price: 199,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    details: {
      location: 'Centro de París',
      rating: 4.8,
      amenities: ['Wifi', 'Piscina', 'Spa', 'Restaurante'],
      roomType: 'Habitación Deluxe',
    },
  },
  {
    id: 'hotel-2',
    type: 'hotel',
    title: 'Luxury Palace Hotel',
    price: 299,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    details: {
      location: 'Campos Elíseos, París',
      rating: 4.9,
      amenities: ['Wifi', 'Spa', 'Gimnasio', 'Restaurante Michelin'],
      roomType: 'Suite Junior',
    },
  },
];

export const availableAttractions: CartItem[] = [
  {
    id: 'attr-1',
    type: 'attraction',
    title: 'Tour Torre Eiffel',
    price: 65,
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e',
    details: {
      location: 'París',
      duration: '3 horas',
      includes: ['Acceso sin filas', 'Guía en español', 'Acceso a la cima'],
      schedule: '9:00 AM - 12:00 PM',
    },
  },
  {
    id: 'attr-2',
    type: 'attraction',
    title: 'Museo del Louvre',
    price: 45,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
    details: {
      location: 'París',
      duration: '4 horas',
      includes: ['Entrada prioritaria', 'Audioguía', 'Mapa del museo'],
      schedule: '10:00 AM - 2:00 PM',
    },
  },
  {
    id: 'attr-3',
    type: 'attraction',
    title: 'Crucero por el Sena',
    price: 35,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
    details: {
      location: 'París',
      duration: '1 hora',
      includes: ['Audioguía', 'Copa de champagne', 'Snacks'],
      schedule: 'Salidas cada hora',
    },
  },
];
