export interface GalleryItem {
    id: number;
    category: string;
    image: string;
    title: string;
    artist: string;
}

export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: "all", label: "Todo" },
  { id: "realismo", label: "Realismo" },
  { id: "blackwork", label: "Blackwork" },
  { id: "fineline", label: "Fine Line" },
  { id: "japones", label: "Japonés" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "realismo",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2025/08/tatuajes-realistas-para-brazo-tony-black-14.webp",
    title: "Retrato en grises",
    artist: "Anya",
  },
  {
    id: 2,
    category: "blackwork",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2025/08/tatuajes-realistas-para-brazo-tony-black-15.webp",
    title: "Geometría Sagrada",
    artist: "Kael",
  },
  {
    id: 3,
    category: "fineline",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2024/02/tatuajes-surrealistas-barcelona-steel-of-doom-img_9234.webp",
    title: "Floral Delicado",
    artist: "Elara",
  },
  {
    id: 4,
    category: "japones",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2022/04/IMG_1634.webp",
    title: "Dragón Irezumi",
    artist: "Ren",
  },
  {
    id: 5,
    category: "realismo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGGXJ4fFpnc89y35-sCNTLuRH_s87FlrV2Q&s",
    title: "León Realista",
    artist: "Anya",
  },
  {
    id: 6,
    category: "blackwork",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2025/10/tatuaje-valkiria-realista-tony-black-tattoo-barcelona.webp",
    title: "Manga Blackout",
    artist: "Kael",
  },
  {
    id: 7,
    category: "fineline",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2025/10/tatuajes-realistas-pajaros-tony-black-tattoo.webp",
    title: "Mariposa Minimalista",
    artist: "Elara",
  },
  {
    id: 8,
    category: "japones",
    image:
      "https://www.tonyblacktattoo.com/wp-content/uploads/2025/11/tatuajes-realistas-egipto-barcelona-head-533x533.webp",
    title: "Máscara Hannya",
    artist: "Ren",
  },

  // Nuevos Items ↓↓↓
  {
    id: 9,
    category: "realismo",
    image:
      "https://images.unsplash.com/photo-1587740896339-8714db590b51?q=80&w=600&auto=format&fit=crop",
    title: "Rosa Hiperealista",
    artist: "Anya",
  },
  {
    id: 10,
    category: "blackwork",
    image:
      "https://images.unsplash.com/photo-1603988363607-41f87eeb8e45?q=80&w=600&auto=format&fit=crop",
    title: "Ángel Oscuro",
    artist: "Kael",
  },
  {
    id: 11,
    category: "fineline",
    image:
      "https://images.unsplash.com/photo-1611864414282-0f7cb85bbffa?q=80&w=600&auto=format&fit=crop",
    title: "Astro Minimal",
    artist: "Elara",
  },
  {
    id: 12,
    category: "japones",
    image:
      "https://images.unsplash.com/photo-1607013404512-af702da16597?q=80&w=600&auto=format&fit=crop",
    title: "Samurai Tradicional",
    artist: "Ren",
  },
  {
    id: 13,
    category: "realismo",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
    title: "Retrato Realista Femenino",
    artist: "Anya",
  },
  {
    id: 14,
    category: "blackwork",
    image:
      "https://images.unsplash.com/photo-1561449783-41c905a72f65?q=80&w=600&auto=format&fit=crop",
    title: "Cráneo Blackwork",
    artist: "Kael",
  },
  {
    id: 15,
    category: "fineline",
    image:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68a?q=80&w=600&auto=format&fit=crop",
    title: "Flor Minimal Fine Line",
    artist: "Elara",
  },
  {
    id: 16,
    category: "japones",
    image:
      "https://images.unsplash.com/photo-1594629866383-9d05b6eaa63e?q=80&w=600&auto=format&fit=crop",
    title: "Carpa Koi Irezumi",
    artist: "Ren",
  },
];
