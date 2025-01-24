// Mock data for the travel application
export const cities = [
  "Madrid", "Barcelona", "Paris", "Londres", "Roma", "Berlín", 
  "Amsterdam", "Lisboa", "Viena", "Praga", "Atenas", "Dublín",
  "Bruselas", "Copenhague", "Estocolmo", "Oslo", "Helsinki"
];

export const flights = [
  {
    id: 1,
    airline: "Air Europa",
    origin: "Madrid",
    destination: "Paris",
    departure: "10:00 AM",
    arrival: "12:30 PM",
    duration: "2h 30m",
    price: "199",
    stops: 0,
    rating: 4.5,
    reviews: 320,
    features: ["Equipaje de mano", "Selección de asiento", "Comida a bordo"],
    schedule: [
      { days: "Lunes, Miércoles, Viernes", time: "10:00 AM" },
      { days: "Martes, Jueves", time: "2:00 PM" },
      { days: "Sábado, Domingo", time: "11:30 AM" }
    ]
  },
  {
    id: 2,
    airline: "Iberia",
    origin: "Madrid",
    destination: "Paris",
    departure: "2:00 PM",
    arrival: "4:20 PM",
    duration: "2h 20m",
    price: "179",
    stops: 0,
    rating: 4.7,
    reviews: 450,
    features: ["Equipaje de mano", "Wifi a bordo", "Entretenimiento"],
    schedule: [
      { days: "Todos los días", time: "2:00 PM" },
      { days: "Lunes, Viernes", time: "7:00 AM" }
    ]
  }
];

export const hotels = [
  {
    id: 1,
    name: "Grand Hotel Paris",
    location: "Paris, Francia",
    rating: 4.5,
    price: "199",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description: "Elegante hotel en el corazón de París",
  },
  {
    id: 2,
    name: "Cancún Resort & Spa",
    location: "Cancún, México",
    rating: 4.8,
    price: "299",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    description: "Resort de lujo frente al mar Caribe",
  }
];

export const packages = [
  {
    id: 1,
    title: "Aventura en París",
    location: "París, Francia",
    duration: "7 días",
    price: "1499",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Descubre la Ciudad de la Luz con este paquete todo incluido: vuelos, hotel 4 estrellas, tours guiados y experiencias gastronómicas.",
    includes: ["Vuelos ida y vuelta", "Hotel 4 estrellas", "Desayuno incluido", "Tour por la ciudad", "Cena en la Torre Eiffel"],
  },
  {
    id: 2,
    title: "Paraíso Caribeño",
    location: "Cancún, México",
    duration: "5 días",
    price: "1299",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18",
    description: "Escápate al paraíso con este paquete all-inclusive: resort de lujo, actividades acuáticas y experiencias únicas.",
    includes: ["Vuelos ida y vuelta", "Resort 5 estrellas", "All-inclusive", "Actividades acuáticas", "Spa"],
  }
];

export const featuredDestinations = [
  {
    id: 1,
    title: "Paris, Francia",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "899",
    description: "La ciudad del amor y la luz",
    rating: 4.8
  },
  {
    id: 2,
    title: "Roma, Italia",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: "799",
    description: "Historia y cultura milenaria",
    rating: 4.7
  },
  {
    id: 3,
    title: "Londres, Inglaterra",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: "999",
    description: "Tradición y modernidad",
    rating: 4.6
  }
];

export const popularPackages = [
  {
    id: 1,
    title: "Europa Mágica",
    duration: "10 días",
    price: "2499",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89",
    includes: [
      "Vuelos ida y vuelta",
      "Hoteles 4★ en ubicaciones céntricas",
      "Desayuno buffet diario",
      "Tours guiados en cada ciudad",
      "Traslados aeropuerto-hotel",
      "Transporte entre ciudades",
      "Guía turístico profesional",
      "Entradas a monumentos principales"
    ],
    description: "Un viaje inolvidable por las ciudades más emblemáticas de Europa. Visitarás París, Roma, Venecia y Barcelona, descubriendo la rica historia, cultura y gastronomía de cada destino. Incluye experiencias únicas como una cena en la Torre Eiffel, un paseo en góndola por Venecia y una visita guiada al Coliseo Romano.",
    rating: 4.9,
    highlights: [
      "Visita a la Torre Eiffel y crucero por el Sena",
      "Tour por el Vaticano y Coliseo Romano",
      "Paseo en góndola por los canales de Venecia",
      "Visita a la Sagrada Familia en Barcelona"
    ],
    itinerary: [
      "Días 1-3: París - Torre Eiffel, Louvre, Versalles",
      "Días 4-6: Roma - Vaticano, Coliseo, Foro Romano",
      "Días 7-8: Venecia - San Marcos, Murano, Burano",
      "Días 9-10: Barcelona - Sagrada Familia, Parque Güell"
    ]
  },
  {
    id: 2,
    title: "Mediterráneo Total",
    duration: "12 días",
    price: "2899",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59",
    includes: [
      "Vuelos ida y vuelta",
      "Hoteles 5★ con vistas al mar",
      "Pensión completa",
      "Excursiones diarias",
      "Traslados privados",
      "Guía especializado",
      "Actividades acuáticas",
      "Seguro de viaje premium"
    ],
    description: "Una experiencia única recorriendo las joyas del Mediterráneo. Desde las playas cristalinas de Grecia hasta la Costa Amalfitana italiana, pasando por las islas croatas. Disfruta de la mejor gastronomía mediterránea, paisajes espectaculares y actividades exclusivas en cada destino.",
    rating: 4.8,
    highlights: [
      "Navegación por las islas griegas",
      "Tour gastronómico en la Toscana",
      "Excursión en yate por la Costa Amalfitana",
      "Visita a viñedos históricos"
    ],
    itinerary: [
      "Días 1-3: Atenas y Santorini",
      "Días 4-6: Toscana y Cinque Terre",
      "Días 7-9: Costa Amalfitana",
      "Días 10-12: Dubrovnik y Split"
    ]
  }
];