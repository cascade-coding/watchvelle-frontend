import { Link } from "react-router";
import { cn } from "../../lib/utils";

const ProductCard = ({
  to = "#",
  brand,
  title,
  price,
  originalPrice,
  primaryImage,
  secondaryImage,
  className = "",
  ...props
}) => {
  return (
    <Link
      to={to}
      className={cn("block w-full max-w-80 group", className)}
      {...props}
    >
      {/* Images */}
      <div className="relative">
        <img
          src={primaryImage}
          alt={title}
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
        />

        <img
          src={secondaryImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Info */}
      <div className="pt-2 border-t border-border mt-2.5 flex flex-col gap-1.5">
        <p className="font-semibold text-sm text-gold tracking-[1.44px]">
          {brand}
        </p>

        <p
          className="font-medium text-base text-foreground line-clamp-2 h-12"
          title={title}
        >
          {title}
        </p>

        <div className="flex items-center gap-2">
          <p className="font-bold text-base text-brand">{price}</p>
          {originalPrice && (
            <p className="font-semibold text-sm text-[#8A8A8A] line-through">
              {originalPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
