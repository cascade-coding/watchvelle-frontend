import { create } from "zustand";

const rand = () => Math.random().toString(36).slice(2, 8);

export const useConstants = create((set, get) => ({
  DEMO: true,

  DEMO_FEATURED_PRODUCT_CARDS: [
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

  DEMO_BEST_SELLER_PRODUCT_CARDS: [
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
  DEMO_SHOP_BY_BRAND_CARDS: [
    {
      id: rand(),
      to: "/brands/rolex",
      brand: "Rolex",
      brandImage: "/images/brands/brand-rolex.png",
    },
    {
      id: rand(),
      to: "/brands/cartier",
      brand: "Cartier",
      brandImage: "/images/brands/brand-cartier.png",
    },
    {
      id: rand(),
      to: "/brands/omega",
      brand: "Omega",
      brandImage: "/images/brands/brand-omega.png",
    },
    {
      id: rand(),
      to: "/brands/longines",
      brand: "Longines",
      brandImage: "/images/brands/brand-longines.png",
    },
    {
      id: rand(),
      to: "/brands/breitling",
      brand: "Breitling",
      brandImage: "/images/brands/brand-breitling.png",
    },
    {
      id: rand(),
      to: "/brands/tissot",
      brand: "Tissot",
      brandImage: "/images/brands/brand-tissot.png",
    },
  ],

  getDemoFeaturedProductCards: (cards = []) => {
    const { DEMO, DEMO_FEATURED_PRODUCT_CARDS } = get();
    return DEMO ? DEMO_FEATURED_PRODUCT_CARDS : cards;
  },

  getBestSellerProductCards: (cards = []) => {
    const { DEMO, DEMO_BEST_SELLER_PRODUCT_CARDS } = get();
    return DEMO ? DEMO_BEST_SELLER_PRODUCT_CARDS : cards;
  },

  getShopByBrandCards: () => {
    const { DEMO_SHOP_BY_BRAND_CARDS } = get();
    return DEMO_SHOP_BY_BRAND_CARDS;
  },
}));
