import type { ProductWithDetails } from "@models/product/Product_with_details";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSelectors from "./components/ProductSelectors";
import ProductActions from "./components/ProductActions";
import ProductTabs from "./components/ProductTabs";

type ProductDetailesViewProps = {
  productWithDetails?: ProductWithDetails;
};

const ProductDetailesView: React.FC<ProductDetailesViewProps> = ({
  productWithDetails,
}) => {
  if (!productWithDetails) {
    return null;
  }

  return (
    <section className="mainContentWrapper">
      <div className="row">
        <ProductGallery
          images={productWithDetails.images}
          productTitle={productWithDetails.title}
          productId={productWithDetails.id}
        />
        <div className="col-12 col-md">
          <ProductInfo productWithDetails={productWithDetails} />
          <ProductSelectors
            colors={productWithDetails.colors}
            sizes={productWithDetails.sizes}
            productId={productWithDetails.id}
          />
          <ProductActions productId={productWithDetails.id} />
        </div>
      </div>
      <ProductTabs className="pt-5" productWithDetails={productWithDetails} />
    </section>
  );
};

export default ProductDetailesView;
