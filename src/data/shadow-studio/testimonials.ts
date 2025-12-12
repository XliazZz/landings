export interface TestimonialItem {
  id: number;
  name: string;
  date: string;
  artist: string;
  rating: number;
  text: string;
  category: string;
  location: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Luisa",
    date: "Hace 2 semanas",
    artist: "Elara",
    rating: 5,
    text: "Buscaba algo muy sutil y femenino. La mano de Elara es increíblemente ligera; apenas sentí dolor y la curación fue rapidísima. El diseño floral encaja perfectamente con la anatomía de mi brazo.",
    category: "Fine Line",
    location: "Antebrazo",
  },
  {
    id: 2,
    name: "María",
    date: "Marzo 2024",
    artist: "Anya",
    rating: 5,
    text: "Le pedí a Anya un micro-retrato de mi perro y el resultado me dejó sin palabras. Capturó su expresión exacta. La técnica de sombreado es de otro nivel. Definitivamente volveré por más.",
    category: "Micro-Realismo",
    location: "Muñeca",
  },
  {
    id: 3,
    name: "Elias",
    date: "Enero 2024",
    artist: "Kael",
    rating: 5,
    text: "Kael entendió perfectamente el concepto oscuro que quería para mi pieza neotradicional. Las líneas son sólidas y el negro está saturado a la perfección. Un verdadero profesional del Blackwork.",
    category: "Neotradicional",
    location: "Pantorrilla",
  },
  {
    id: 4,
    name: "Pedro",
    date: "Diciembre 2023",
    artist: "Ren",
    rating: 4.9,
    text: "Tenía un tatuaje viejo del que me avergonzaba. Ren diseñó una pieza japonesa increíble que no solo lo tapó, sino que ahora es mi tatuaje favorito. El flujo del diseño es magistral.",
    category: "Japonés",
    location: "Espalda",
  },
  {
    id: 5,
    name: "Ana",
    date: "Abril 2024",
    artist: "Elara",
    rating: 5,
    text: "La atención al detalle en las hojas y texturas es impresionante. El estudio es impecable, con una vibra muy relajante y higiénica. Una experiencia de lujo de principio a fin.",
    category: "Botánico",
    location: "Costillas",
  },
  {
    id: 6,
    name: "Luis",
    date: "Febrero 2024",
    artist: "Kael",
    rating: 5,
    text: "La simetría en este trabajo de blackwork es matemática pura. Kael es muy meticuloso con la posición del stencil y se nota en el resultado final. Muy recomendado.",
    category: "Blackwork",
    location: "Pecho",
  },
];