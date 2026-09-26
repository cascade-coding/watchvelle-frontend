import ShopHero from "../components/Shop/ShopHero";
import Filters from "../components/Shop/Filters";
import FiltersDrawer from "../components/Shop/FiltersDrawer";
import ShopProducts from "../components/Shop/ShopProducts";
import Container from "../components/shared/Container";
import WhyUs from "../components/shared/WhyUs";

const Shop = () => {
  return (
    <div>
      <ShopHero />

      <div className="bg-[#FAFAFA]">
        <Container className="flex gap-7 bg-white lg:px-0">
          {/* Filters — desktop sidebar */}
          <aside className="hidden lg:block w-75 shrink-0 pt-15 bg-[#FAFAFA]">
            <Filters />
          </aside>

          {/* Products */}
          <div className="flex-1 min-w-0">
            <div className="">
              <ShopProducts />
            </div>
          </div>
        </Container>
      </div>

      {/* Filters - Mobile drawer */}
      <FiltersDrawer />

      <WhyUs />
    </div>
  );
};

export default Shop;
