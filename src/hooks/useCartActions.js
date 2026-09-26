import { useCart } from "../store/useCart";

const useCartActions = () => {
  const items = useCart((state) => state.items);
  const addItem = useCart((state) => state.addItem);
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const incrementQuantity = useCart((state) => state.incrementQuantity);
  const decrementQuantity = useCart((state) => state.decrementQuantity);
  const clearCart = useCart((state) => state.clearCart);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const hasItem = (id) => items.some((item) => item.id === id);

  const isInCart = (id) => hasItem(id);

  return {
    items,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    hasItem,
    isInCart,
  };
};

export default useCartActions;
