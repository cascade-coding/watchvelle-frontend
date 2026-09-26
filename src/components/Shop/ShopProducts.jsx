import { useState, useMemo } from "react";
import ProductCard from "../shared/ProductCard";
import { useConstants } from "../../store/useConstants";
import Button from "../shared/Button";
import ProductBreadcrumb from "../SingleProduct/ProductBreadcrumb";
import SortDropdown from "./SortDropdown";
import FilterIcon from "../icons/FilterIcon";
import { useApp } from "../../hooks/useApp";

const PER_PAGE = 20;

const ShopProducts = () => {
  const getShopProductCards = useConstants(
    (state) => state.getShopProductCards,
  );

  const openFilters = useApp((state) => state.openFilters);

  const cards = getShopProductCards();
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);

  const visibleCards = useMemo(
    () => cards.slice(0, visibleCount),
    [cards, visibleCount],
  );

  const hasMore = visibleCount < cards.length;
  const totalItems = cards.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PER_PAGE, totalItems));
  };

  return (
    <div className="bg-white pt-8 sm:pt-10">
      <div className="lg:pr-4">
        <div className="hidden md:block">
          <ProductBreadcrumb />
        </div>

        <div className="flex gap-2 items-center justify-between mt-2.5">
          {/* Sort By */}
          <div className="hidden md:flex gap-2 items-center">
            <p className="text-sm text-muted">
              {totalItems.toLocaleString()} Items
            </p>

            <div className="h-6 w-px bg-muted/40" />

            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-muted uppercase">
                Sort By:
              </span>
              <SortDropdown />
            </div>
          </div>

          {/* Filter */}
          <div className="w-full md:w-auto flex gap-4 items-center justify-between lg:hidden">
            <p className="text-sm text-muted md:hidden">
              {totalItems.toLocaleString()} Items
            </p>

            <button
              type="button"
              className="hover:cursor-pointer"
              onClick={openFilters}
            >
              <FilterIcon className="[&_path]:stroke-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="lg:pr-4 pt-6 sm:pt-6.5">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4.5 gap-y-7 pb-4">
          {visibleCards.map((product) => (
            <ProductCard
              key={product.id}
              className="mx-auto w-full"
              {...product}
            />
          ))}
        </div>

        <div className="mt-16 pb-28 text-center">
          {hasMore ? (
            <Button
              onClick={handleLoadMore}
              className="text-white mx-auto hover:bg-stone-700"
            >
              See More Watches
            </Button>
          ) : (
            <p className="text-sm text-muted">No more results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
