export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: "Realismo",
    description: "Capturamos la esencia de tus ideas con detalles fotorrealistas, creando obras que parecen cobrar vida sobre la piel.",
    icon: "camera",
    link: "#",
  },
  {
    title: "Fineline",
    description: "Trazos delicados y precisos para diseños elegantes y sutiles. La máxima expresión de la finura en el arte del tatuaje.",
    icon: "pencil",
    link: "#",
  },
  {
    title: "Blackwork",
    description: "Exploramos el poder del negro con diseños audaces y contrastantes. Desde patrones geométricos hasta ilustraciones impactantes.",
    icon: "contrast",
    link: "#",
  },
  {
    title: "Full Color",
    description: "Saturación vibrante y mezclas perfectas. Llevamos la teoría del color a tu piel para piezas neotradicionales o new school.",
    icon: "palette",
    link: "#",
  },
  {
    title: "Cover Up",
    description: "Transformamos el pasado. Nuestros artistas expertos en cobertura rediseñan y ocultan tatuajes anteriores con nuevas obras maestras.",
    icon: "refresh",
    link: "#",
  },
  {
    title: "Diseño Custom",
    description: "Colaboramos contigo para crear una pieza única. Tu historia y nuestra visión se unen en un diseño que solo te pertenecerá a ti.",
    icon: "brush", 
    link: "#",
  },
];