import { create } from "zustand";

const STORAGE_KEY = "watchvelle-cart";

const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    //
  }
};

export const useCart = create((set, get) => ({
  items: loadCart(),

  addItem: (product, quantity = 1) => {
    const items = get().items;
    const existing = items.find((item) => item.id === product.id);

    let next;
    if (existing) {
      next = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    } else {
      next = [...items, { ...product, quantity }];
    }

    saveCart(next);
    set({ items: next });
  },

  removeItem: (id) => {
    const next = get().items.filter((item) => item.id !== id);
    saveCart(next);
    set({ items: next });
  },

  updateQuantity: (id, quantity) => {
    const next = get()
      .items.map((item) => (item.id === id ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    saveCart(next);
    set({ items: next });
  },

  incrementQuantity: (id) => {
    const item = get().items.find((i) => i.id === id);
    if (item) get().updateQuantity(id, item.quantity + 1);
  },

  decrementQuantity: (id) => {
    const item = get().items.find((i) => i.id === id);
    if (item) get().updateQuantity(id, item.quantity - 1);
  },

  clearCart: () => {
    saveCart([]);
    set({ items: [] });
  },

  getItem: (id) => get().items.find((item) => item.id === id),

  getItemCount: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));
