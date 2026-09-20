import { useConstants } from "../../store/useConstants";
import ProductDescription from "./ProductDescription";
import ProductSpecTable from "./ProductSpecTable";

const ProductDetails = () => {
  const product = useConstants((state) => state.DEMO_SINGLE_PRODUCT);

  return (
    <div className="pt-8 md:pt-9">
      <ProductDescription description={product.description} />

      <div className="mt-10 flex flex-col gap-4 sm:gap-6 pb-12 sm:pb-17">
        <ProductSpecTable title="ITEM" specs={product.item} alwaysOpen />
        <ProductSpecTable title="CASE" specs={product.case} alwaysOpen />
        <ProductSpecTable title="BAND" specs={product.band} />
        <ProductSpecTable title="DIAL" specs={product.dial} />
        <ProductSpecTable title="FEATURES" specs={product.features} />
        <ProductSpecTable
          title="ADDITIONAL INFO"
          specs={product.additionalInfo}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
