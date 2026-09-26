import { create } from "zustand";

export const useApp = create((set) => ({
  isFiltersOpen: false,
  openFilters: () => set({ isFiltersOpen: true }),
  closeFilters: () => set({ isFiltersOpen: false }),
  toggleFilters: () =>
    set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
}));
