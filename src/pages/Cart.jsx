import { Link } from "react-router";
import useCartActions from "../hooks/useCartActions";
import Container from "../components/shared/Container";
import Button from "../components/shared/Button";
import Minus from "../components/icons/Minus";
import Plus from "../components/icons/Plus";
import Close from "../components/icons/Close";


const Cart = () => {
  const {
    items,
    totalItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = useCartActions();

  if (items.length === 0) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="font-brand font-bold text-2xl uppercase tracking-[1.4px] text-brand">
            Your cart is empty
          </h1>
          <p className="text-muted text-sm mt-3">
            Looks like you haven't added anything yet.
          </p>
          <Link to="/shop" className="inline-block mt-6">
            <Button className="text-white">Continue Shopping</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8 sm:py-10">
      <h1 className="font-brand font-bold text-2xl uppercase tracking-[1.4px] text-brand mb-6">
        Shopping Cart ({totalItems})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Cart items */}
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {items.map((item) => (
            <li key={item.id} className="py-5 flex gap-4">
              {/* Image */}
              <Link
                to={item.to}
                className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 border border-border rounded-md overflow-hidden"
              >
                <img
                  src={item.primaryImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs uppercase tracking-[1.44px] text-gold">
                  {item.brand}
                </p>

                <Link
                  to={item.to}
                  className="block font-medium text-sm sm:text-base text-foreground line-clamp-2 hover:underline mt-0.5"
                >
                  {item.title}
                </Link>

                <p className="font-bold text-base text-brand mt-2">
                  {item.price}
                </p>

                {item.originalPrice && (
                  <p className="text-xs text-muted line-through">
                    {item.originalPrice}
                  </p>
                )}

                {/* Quantity controls + remove */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      type="button"
                      onClick={() => decrementQuantity(item.id)}
                      aria-label="Decrease quantity"
                      className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer transition"
                    >
                      <Minus />
                    </button>
                    <span className="px-4 text-sm font-medium min-w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => incrementQuantity(item.id)}
                      aria-label="Increase quantity"
                      className="px-3 py-1.5 hover:bg-gray-100 cursor-pointer transition"
                    >
                      <Plus />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove from cart"
                    className="p-1.5 text-muted hover:text-foreground cursor-pointer transition"
                  >
                    <Close />
                  </button>
                </div>
              </div>

              {/* Line total */}
              <div className="hidden sm:block shrink-0 text-right">
                <p className="font-semibold text-sm text-foreground">
                  ${(parsePrice(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Order summary */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="border border-border rounded-md p-5">
            <h2 className="font-bold text-base uppercase tracking-[1.2px] text-brand pb-4 border-b border-border">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">
                  ${cartTotal(items).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span className="font-medium text-success">Free</span>
              </div>
            </div>

            <div className="flex justify-between pt-4 mt-4 border-t border-border">
              <span className="font-semibold text-base">Total</span>
              <span className="font-bold text-lg text-brand">
                ${cartTotal(items).toFixed(2)}
              </span>
            </div>

            <Button className="text-white w-full mt-5">
              Proceed to Checkout
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
};

// Helpers
const parsePrice = (priceStr = "") =>
  parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;

const cartTotal = (items) =>
  items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

export default Cart;
