import React from "react";
import ShopHero from "../components/Shop/ShopHero";
import Filters from "../components/Shop/Filters";

const Shop = () => {
  return (
    <div>
      <ShopHero />

      {/* Filters and Products */}
      <div className="flex gap-8">
        <aside className="hidden lg:block w-75 shrink-0 bg-[#FAFAFA] pt-15">
          <Filters />
        </aside>

        {/* Products */}
        <div className="flex-1 min-w-0">
          <div className="h-[5000px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
