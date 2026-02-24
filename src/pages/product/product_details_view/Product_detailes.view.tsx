import type { ProductWithDetails } from "@models/product/Product_with_details";

type ProductDetailesViewProps = {
  productWithDetails?: ProductWithDetails;
};

const ProductDetailesView: React.FC<ProductDetailesViewProps> = ({
  productWithDetails,
}) => {
  return <>Product ID: {productWithDetails?.title}</>;
};

export default ProductDetailesView;
