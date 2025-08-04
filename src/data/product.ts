// components/data/products.ts
export type ProductType = "our" | "edp" | "fab";

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  type: ProductType;
}

export interface Filter {
  title: "Our Product" | "EDP Product" | "Fabrikasi Product";
  type: ProductType;
}

export const filters: Filter[] = [
  {
    title: "Our Product",
    type: "our",
  },
  {
    title: "EDP Product",
    type: "edp",
  },
  {
    title: "Fabrikasi Product",
    type:"fab"
  }
];

export const products: Product[] = [
  {
    id: 1,
    title: "Base Sub",
    imageUrl: "/assets/products/our/basesubb.png",
    type: "our",
  },
  {
    id: 2,
    title: "Main Frame",
    imageUrl: "/assets/products/our/main_frame.png",
    type: "our",
  },
  {
    id: 3,
    title: "Base Plat",
    imageUrl: "/assets/products/our/base_plat.png",
    type: "our",
  },
  {
    id: 4,
    title: "Washer",
    imageUrl: "/assets/products/our/washer.png",
    type: "our",
  },
  {
    id: 5,
    title: "U-Klip",
    imageUrl: "/assets/products/our/u_klip.png",
    type: "our",
  },
  {
    id: 6,
    title: "Bracket 36",
    imageUrl: "/assets/products/our/bracket_36.png",
    type: "our",
  },
  {
    id: 7,
    title: "Muffler",
    imageUrl: "/assets/products/our/Muffler.png",
    type: "our",
  },
  {
    id: 8,
    title: "Stay Guard",
    imageUrl: "/assets/products/our/stay_guard.png",
    type: "our",
  },
  {
    id: 9,
    title: "Outher Cap",
    imageUrl: "/assets/products/our/outher_cap.png",
    type: "our",
  },
  {
    id: 10,
    title: "Bracket 2734",
    imageUrl: "/assets/products/our/bracket_2734.png",
    type: "our",
  },
  {
    id: 11,
    title: "Plate 1427",
    imageUrl: "/assets/products/our/plate_1427.png",
    type: "our",
  },
  {
    id: 12,
    title: "Bracket Noise",
    imageUrl: "/assets/products/our/bracket_noise.png",
    type: "our",
  },
  {
    id: 13,
    title: "Base Plat 125",
    imageUrl: "/assets/products/our/base_plat_125.png",
    type: "our",
  },
  {
    id: 14,
    title: "Bracket 57",
    imageUrl: "/assets/products/our/bracket_57.png",
    type: "our",
  },
  {
    id: 15,
    title: "Gusset 39",
    imageUrl: "/assets/products/our/gusset_39.png",
    type: "our",
  },
  {
    id: 16,
    title: "Nut Founder Set",
    imageUrl: "/assets/products/our/nut_founder_set.png",
    type: "our",
  },
  {
    id: 17,
    title: "Colling Element",
    imageUrl: "/assets/products/our/colling_element.png",
    type: "our",
  },
  {
    id: 18,
    title: "EDP 1",
    imageUrl: "/assets/products/edp/1.jpeg",
    type: "edp",
  },
  {
    id: 19,
    title: "EDP 2",
    imageUrl: "/assets/products/edp/2.png",
    type: "edp",
  },
  {
    id: 20,
    title: "EDP 3",
    imageUrl: "/assets/products/edp/3.png",
    type: "edp",
  },
  {
    id: 21,
    title: "EDP 4",
    imageUrl: "/assets/products/edp/4.png",
    type: "edp",
  },
  {
    id: 22,
    title: "EDP 5",
    imageUrl: "/assets/products/edp/5.png",
    type: "edp",
  },
  {
    id: 23,
    title: "EDP 6",
    imageUrl: "/assets/products/edp/6.png",
    type: "edp",
  },
  {
    id: 24,
    title: "EDP 7",
    imageUrl: "/assets/products/edp/7.png",
    type: "edp",
  },
  {
    id: 25,
    title: "EDP 8",
    imageUrl: "/assets/products/edp/8.png",
    type: "edp",
  },
  {
    id: 26,
    title: "EDP 9",
    imageUrl: "/assets/products/edp/9.png",
    type: "edp",
  },
  {
    id: 27,
    title: "EDP 10",
    imageUrl: "/assets/products/edp/10.png",
    type: "edp",
  },
  {
    id: 28,
    title: "EDP 11",
    imageUrl: "/assets/products/edp/11.png",
    type: "edp",
  },
  {
    id: 29,
    title: "Fabrikasi 1",
    imageUrl: "/assets/products/fabrikasi/1.jpeg",
    type: "fab",
  },
  {
    id: 30,
    title: "Fabrikasi 2",
    imageUrl: "/assets/products/fabrikasi/2.jpeg",
    type: "fab",
  },
  {
    id: 32,
    title: "Fabrikasi 3",
    imageUrl: "/assets/products/fabrikasi/3.jpeg",
    type: "fab",
  },
];
