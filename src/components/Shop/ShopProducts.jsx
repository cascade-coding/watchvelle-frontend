import { useState } from "react";
import ProductCard from "../shared/ProductCard";
import { useConstants } from "../../store/useConstants";
import Button from "../shared/Button";
import ProductBreadcrumb from "../SingleProduct/ProductBreadcrumb";
import SortDropdown from "./SortDropdown";
import FilterIcon from "../icons/FilterIcon";

const SORT_OPTIONS = [
  { value: "most-viewed", label: "Most Viewed" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
  { value: "rating", label: "Top Rated" },
];

const ShopProducts = () => {
  const getShopProductCards = useConstants(
    (state) => state.getShopProductCards,
  );

  const cards = getShopProductCards();
  const [sort, setSort] = useState("most-viewed");

  return (
    <div className="bg-white pt-8 sm:pt-10">
      <div className="lg:pr-4">
        <div className="hidden md:block">
          <ProductBreadcrumb />
        </div>

        <div className="flex gap-2 items-center justify-between mt-2.5">
          {/* Sort By */}
          <div className="hidden md:flex gap-2 items-center">
            <p className="text-sm text-muted">50,163 Items</p>

            <div className="h-6 w-px bg-muted/40" />

            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-muted uppercase">
                Sort By:
              </span>
              <SortDropdown
                options={SORT_OPTIONS}
                value={sort}
                onChange={setSort}
              />
            </div>
          </div>

          {/* Filter */}
          <div className="w-full md:w-auto flex gap-4 items-center justify-between lg:hidden">
            <p className="text-sm text-muted md:hidden">50,163 Items</p>

            <button className="hover:cursor-pointer">
              <FilterIcon className="[&_path]:stroke-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="lg:pr-4 pt-6 sm:pt-6.5">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4.5 gap-y-7 pb-4">
          {cards.map(({ id, ...product }) => (
            <ProductCard key={id} className="mx-auto w-full" {...product} />
          ))}
        </div>

        <div className="mt-16 pb-28">
          <Button className="text-white mx-auto">See More Watches</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
