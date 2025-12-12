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
    category: "blackwork",
    image:
      "https://i.pinimg.com/736x/7d/6a/73/7d6a732619d9b8f4901d914dfd3019f7.jpg",
    title: "Geometría Sagrada",
    artist: "Kael",
  },
    {
    id: 2,
    category: "fineline",
    image:
      "https://i.pinimg.com/736x/ee/ce/c0/eecec04694c85de61e6c96c2e6313433.jpg",
    title: "Floral Delicado",
    artist: "Elara",
  },
  {
    id: 3,
    category: "realismo",
    image:
      "https://i.pinimg.com/1200x/8c/7e/2d/8c7e2d75f0a7c03075951266306df11f.jpg",
    title: "Retrato en grises",
    artist: "Anya",
  },
  {
    id: 4,
    category: "japones",
    image:
      "https://i.pinimg.com/736x/a1/bb/f6/a1bbf60430225cf45dd305983f955599.jpg",
    title: "Dragón Irezumi",
    artist: "Ren",
  },
  {
    id: 5,
    category: "realismo",
    image:
      "https://i.pinimg.com/1200x/89/e1/03/89e103b93ff607dbd3e21a891c4dd4da.jpg",
    title: "León Realista",
    artist: "Anya",
  },
  {
    id: 6,
    category: "blackwork",
    image:
      "https://i.pinimg.com/736x/96/b0/dc/96b0dc90a475d09074fffb21f23a8424.jpg",
    title: "Manga Blackout",
    artist: "Kael",
  },
  {
    id: 7,
    category: "fineline",
    image:
      "https://i.pinimg.com/736x/2d/b2/ac/2db2acd1fdeff5509ad95059c80736d1.jpg",
    title: "Mariposa Minimalista",
    artist: "Elara",
  },
  {
    id: 8,
    category: "japones",
    image:
      "https://i.pinimg.com/736x/1f/c7/85/1fc785e3ce2feaeb7e35144772e58bac.jpg",
    title: "Máscara Hannya",
    artist: "Ren",
  },
  {
    id: 9,
    category: "realismo",
    image:
      "https://i.pinimg.com/1200x/91/6f/56/916f56d934e1972bc721b1a6534cde81.jpg",
    title: "Rosa Hiperealista",
    artist: "Anya",
  },
  {
    id: 10,
    category: "blackwork",
    image:
      "https://i.pinimg.com/736x/79/c8/2e/79c82ef82870ecbaec5c78e3be30eeec.jpg",
    title: "Ángel Oscuro",
    artist: "Kael",
  },
  {
    id: 11,
    category: "fineline",
    image:
      "https://i.pinimg.com/1200x/a1/c6/3a/a1c63a70c16ce70c1170fe9888f58360.jpg",
    title: "Astro Minimal",
    artist: "Elara",
  },
  {
    id: 12,
    category: "japones",
    image:
      "https://i.pinimg.com/736x/29/ae/59/29ae59dbb3d1ebb6c5938a5e71c65044.jpg",
    title: "Samurai Tradicional",
    artist: "Ren",
  },
  {
    id: 13,
    category: "realismo",
    image:
      "https://i.pinimg.com/736x/5e/b3/e0/5eb3e0df11986c9d3adbc8e02ad91b0a.jpg",
    title: "Retrato Realista Femenino",
    artist: "Anya",
  },
  {
    id: 14,
    category: "blackwork",
    image:
      "https://i.pinimg.com/1200x/c0/f6/5c/c0f65cc2d7b1fb4b6fb07263b26e5f7b.jpg",
    title: "Cráneo Blackwork",
    artist: "Kael",
  },
  {
    id: 15,
    category: "fineline",
    image:
      "https://i.pinimg.com/736x/d1/52/e6/d152e6b59f38e3ef921ba59317114f37.jpg",
    title: "Flor Minimal Fine Line",
    artist: "Elara",
  },
  {
    id: 16,
    category: "japones",
    image:
      "https://i.pinimg.com/736x/5f/71/16/5f711646a30c37455b4b5a351deb8aad.jpg",
    title: "Carpa Koi Irezumi",
    artist: "Ren",
  },
    {
    id: 17,
    category: "realismo",
    image:
      "https://i.pinimg.com/1200x/00/be/4a/00be4aabc505a2779ed636deb515fe68.jpg",
    title: "Retrato Realista Femenino",
    artist: "Anya",
  },
  {
    id: 18,
    category: "blackwork",
    image:
      "https://i.pinimg.com/736x/a5/6b/35/a56b356777d29ac281d8a780b4b615e2.jpg",
    title: "Cráneo Blackwork",
    artist: "Kael",
  },
    {
    id: 19,
    category: "fineline",
    image:
      "https://i.pinimg.com/736x/9f/9b/e1/9f9be1e627085823294274725f956f70.jpg",
    title: "Flor Minimal Fine Line",
    artist: "Elara",
  },
    {
    id: 20,
    category: "japones",
    image:
      "https://i.pinimg.com/736x/c8/ae/7d/c8ae7d12a6c1d3989ebfd7c8880164b8.jpg",
    title: "Carpa Koi Irezumi",
    artist: "Ren",
  },
];
