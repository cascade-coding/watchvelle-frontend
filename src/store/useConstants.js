import { create } from "zustand";

const rand = () => Math.random().toString(36).slice(2, 8);

export const useConstants = create((set, get) => ({
  DEMO: true,

  DEMO_PRODUCT_CARDS: [
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "Speedmaster Chronograph Hand Wind Silver Dial Men's Watch",
      price: "$16,320.00",
      originalPrice: "$20,800.00",
      primaryImage: "/images/product-speedmaster-1.png",
      secondaryImage: "/images/product-speedmaster-2.png",
    },
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,120.00",
      originalPrice: "$7,800.00",
      primaryImage: "/images/product-ville-1.png",
      secondaryImage: "/images/product-ville-2.png",
    },
   
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "Speedmaster Chronograph Hand Wind Silver Dial Men's Watch",
      price: "$16,320.00",
      originalPrice: "$20,800.00",
      primaryImage: "/images/product-speedmaster-1.png",
      secondaryImage: "/images/product-speedmaster-2.png",
    },
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,120.00",
      originalPrice: "$7,800.00",
      primaryImage: "/images/product-ville-1.png",
      secondaryImage: "/images/product-ville-2.png",
    },
   
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "Speedmaster Chronograph Hand Wind Silver Dial Men's Watch",
      price: "$16,320.00",
      originalPrice: "$20,800.00",
      primaryImage: "/images/product-speedmaster-1.png",
      secondaryImage: "/images/product-speedmaster-2.png",
    },
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,120.00",
      originalPrice: "$7,800.00",
      primaryImage: "/images/product-ville-1.png",
      secondaryImage: "/images/product-ville-2.png",
    },
   
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "Speedmaster Chronograph Hand Wind Silver Dial Men's Watch",
      price: "$16,320.00",
      originalPrice: "$20,800.00",
      primaryImage: "/images/product-speedmaster-1.png",
      secondaryImage: "/images/product-speedmaster-2.png",
    },
    {
      id: rand(),
      to: "/watches/speedmaster-chronograph",
      brand: "Omega",
      title: "De Ville Prestige Automatic Chronometer Blue Dial Men's Watch",
      price: "$3,120.00",
      originalPrice: "$7,800.00",
      primaryImage: "/images/product-ville-1.png",
      secondaryImage: "/images/product-ville-2.png",
    },
   
  ],

  getDemoProductCards: (cards = []) => {
    const { DEMO, DEMO_PRODUCT_CARDS } = get();
    return DEMO ? DEMO_PRODUCT_CARDS : cards;
  },
}));
