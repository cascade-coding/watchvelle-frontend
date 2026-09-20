import ProductImageGallery from "./ProductImageGallery";
import { useConstants } from "../../store/useConstants";
import Container from "../shared/Container";
import ProductOverviewInfo from "./ProductOverviewInfo";
import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductTabs from "./ProductTabs";

const ProductOverview = () => {
  const product = useConstants((state) => state.DEMO_SINGLE_PRODUCT);

  return (
    <div className="bg-white">
      <Container className=" pb-7">
        {/* Breadcrumbs */}
        <div className="py-3 sm:py-5 border-b border-border/60">
          <ProductBreadcrumb
            brand={product.item.brand}
            collectionName={product.collectionName}
            productTitle={product.info.title}
          />
        </div>

        {/* Product Image and Overview Text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10 xl:gap-14 pt-4 sm:pt-7">
          <div className="w-full max-w-95 mx-auto md:mx-0 md:col-span-6 lg:col-span-5 lg:max-w-none">
            <ProductImageGallery images={product.images} />
          </div>

          <div className="md:col-span-6 lg:col-span-7 min-w-0 max-w-125 mx-auto md:mx-0 md:max-w-none">
            <ProductOverviewInfo />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="pt-16">
          <ProductTabs />
        </div>
      </Container>
    </div>
  );
};

export default ProductOverview;
