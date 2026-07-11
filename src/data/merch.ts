export type MerchProduct = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  details: string[];
  material: string;
  designStory: string;
  images: string[];
  frontImage: string;
  backImage?: string;
  price?: string;
  status: string;
  availability: string;
  sizes: string[];
  category: string;
};

export const merchProducts: MerchProduct[] = [
  {
    id: "playera",
    name: "Playera",
    slug: "playera",
    shortDescription: "Una prenda para recordar que nadie deja de aprender.",
    description:
      "La playera de Adultxs Inexpertxs es una pieza cómoda y cotidiana para llevar contigo una idea simple: crecer no significa tener todas las respuestas, sino seguir jugando con las preguntas.",
    details: ["Corte relajado", "Estampa frontal", "Gráfica Adultxs Inexpertxs"],
    material: "Algodón suave de uso diario.",
    designStory:
      "Nació como una frase para llevar puesta: una manera de avisar que seguimos intentando sin volvernos demasiado solemnes.",
    images: ["/playera-frente.png", "/playera-vuelta.png"],
    frontImage: "/playera-frente.png",
    backImage: "/playera-vuelta.png",
    status: "Agotado",
    availability: "Actualmente agotado.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Prenda",
  },
  {
    id: "sudadera",
    name: "Sudadera",
    slug: "sudadera",
    shortDescription: "Para esos días donde aprender también necesita un poco de comodidad.",
    description:
      "La sudadera de Adultxs Inexpertxs acompaña los días de dudas, ideas, proyectos y conversaciones largas. Una pieza pensada para sentirse cómoda mientras sigues construyendo tu camino.",
    details: ["Fit cómodo", "Gráfica al frente y vuelta", "Pensada para capas y movimiento"],
    material: "Mezcla de algodón con interior suave.",
    designStory:
      "La sudadera aparece para esos días en los que la adultez pesa, pero todavía queda energía para reunirse, hacer y jugar con una idea.",
    images: ["/sudadera-frente.png", "/sudadera-vuelta.png"],
    frontImage: "/sudadera-frente.png",
    backImage: "/sudadera-vuelta.png",
    status: "Agotado",
    availability: "Actualmente agotado.",
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Prenda",
  },
  {
    id: "gorra",
    name: "Gorra",
    slug: "gorra",
    shortDescription: "Una pieza sencilla para llevar la comunidad a cualquier lugar.",
    description:
      "La gorra de Adultxs Inexpertxs funciona como un recordatorio discreto de que seguimos aprendiendo. Una pieza simple, adaptable y fácil de llevar todos los días.",
    details: ["Unitalla ajustable", "Bordado frontal", "Ligera y cotidiana"],
    material: "Textil estructurado con ajuste posterior.",
    designStory:
      "La gorra es un guiño pequeño: una señal para quienes prefieren no saberlo todo, pero sí seguir apareciendo.",
    images: ["/gorra-frente.png", "/gorra-vuelta.png"],
    frontImage: "/gorra-frente.png",
    backImage: "/gorra-vuelta.png",
    status: "Agotado",
    availability: "Actualmente agotado.",
    sizes: [],
    category: "Accesorio",
  },
];

export function getMerchProduct(slug = "") {
  return merchProducts.find((product) => product.slug === slug);
}
