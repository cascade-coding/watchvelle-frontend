import { create } from "zustand";

export const SORT_OPTIONS = [
  { value: "most-viewed", label: "Most Viewed" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
  { value: "rating", label: "Top Rated" },
]; 

export const useSort = create((set) => ({
  sort: "most-viewed",
  setSort: (sort) => set({ sort }),
}));
