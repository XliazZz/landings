export interface FAQItem {
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    question: "¿Cómo agendo una cita?",
    answer:
      "El proceso inicia con nuestro formulario de contacto. Cuéntanos tu idea, zona del cuerpo y tamaño aproximado. Nuestro equipo revisará la solicitud y te asignará al artista ideal para tu estilo. Se requiere un depósito para bloquear la fecha.",
  },
  {
    question: "¿Tienen diseños disponibles o solo personalizados?",
    answer:
      "En Shadow Studio nos especializamos en piezas únicas y personalizadas ('Custom Work'). Sin embargo, nuestros artistas ocasionalmente liberan 'Flash Designs' (diseños listos para tatuar) que publicamos en nuestras historias de Instagram.",
  },
  {
    question: "¿Cuál es el precio mínimo?",
    answer:
      "Nuestra tarifa mínima de estudio es de 10.000 pesos. El precio final depende de la complejidad, el tamaño y el artista seleccionado. Para piezas grandes (manga, espalda), trabajamos por sesiones.",
  },
  {
    question: "¿Cómo debo prepararme para mi sesión?",
    answer:
      "Descansa bien la noche anterior, hidrátate y come algo contundente antes de venir. Evita el alcohol 24 horas antes. Trae ropa cómoda que permita acceso fácil a la zona a tatuar.",
  },
  {
    question: "¿Hacen Cover Ups (tapar tatuajes viejos)?",
    answer:
      "Sí, contamos con especialistas en Cover Up, como Ren. Es necesario una consulta previa presencial para evaluar si la piel y el tatuaje anterior permiten un resultado óptimo.",
  },
];