import { create } from "zustand";
import {
  DEMO_BEST_SELLER_PRODUCT_CARDS,
  DEMO_FEATURED_PRODUCT_CARDS,
  DEMO_SHOP_BY_BRAND_CARDS,
  DEMO_SINGLE_PRODUCT,
} from "../data";

export const useConstants = create((set, get) => ({
  DEMO: true,

  DEMO_FEATURED_PRODUCT_CARDS,
  DEMO_BEST_SELLER_PRODUCT_CARDS,
  DEMO_SHOP_BY_BRAND_CARDS,
  DEMO_SINGLE_PRODUCT,

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
