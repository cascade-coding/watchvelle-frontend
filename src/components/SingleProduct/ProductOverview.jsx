import ProductImageGallery from "./ProductImageGallery";
import { useConstants } from "../../store/useConstants";
import Container from "../shared/Container";
import Tag from "../icons/Tag";

const ProductOverview = () => {
  const product = useConstants((state) => state.DEMO_SINGLE_PRODUCT);

  return (
    <div className="bg-white">
      <Container className="pt-5 md:pt-4 pb-7">
        <div className="flex flex-col gap-8 sm:flex-row lg:gap-10 xl:gap-14">
          {/* Image gallery */}
          <div className="w-full max-w-[380px] lg:max-w-[420px] lg:w-1/2 lg:shrink-0">
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product info */}
          <div className="w-full lg:flex-1 min-w-0">
            <p className="font-semibold text-sm tracking-[1.44px] uppercase text-gold">
              {product.brand}
            </p>

            <p className="font-brand font-bold text-lg md:text-[28px] uppercase leading-snug text-brand pt-1.5">
              {product.info.title}
            </p>

            <div className="select-none flex gap-x-3 gap-y-1.5 flex-wrap max-w-50 pt-3">
              {product.info.in_stock ? (
                <div className="px-1.5 py-1 bg-[#C9F8D7] text-success font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
                  IN STOCK
                </div>
              ) : (
                <div className="px-1.5 py-1 bg-[#FBD5D5] text-danger font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
                  OUT OF STOCK
                </div>
              )}

              {product.info.off && (
                <div className="px-1.5 py-1 bg-[#F5EEDF] text-[#8A6A32] font-bold text-[11px] tracking-[0.8px] uppercase rounded-sm">
                  {product.info.off} OFF
                </div>
              )}

              {product.info.brand_new && (
                <div className="flex gap-1 items-center px-1.5 py-0">
                  <Tag />
                  <span className="px-1.5 py-1 inline-block text-[#327B8A] text-sm tracking-[0.8px] uppercase">
                    Brand New
                  </span>
                </div>
              )}
            </div>

            <div className="pt-1.5">
              {product.code && (
                <p className="font-medium text-[13px] text-muted/70 ">
                  Code: {product.code}
                </p>
              )}
            </div>

            <p>{product.info.retail}</p>
            <p>{product.info.price}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductOverview;
