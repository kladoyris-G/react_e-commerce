import ProductShimmerContiner from "../product_shimmer_container/Product_shimmer_container";
import ProductContainer from "../product_container/Product_container";
import AnimatedPillButton from "@components/buttons/animated_pill_button/Animated_pill_button";

interface ProductDisplayRowProps {
  title: string;
  useQuery: () => {
    data?: any[];
    isLoading: boolean;
    isError: boolean;
    error?: unknown;
  };
}

const ProductDisplayRow: React.FC<ProductDisplayRowProps> = ({
  title,
  useQuery,
}) => {
  const { data: products, isLoading, isError, error } = useQuery();

  if (isError) {
    console.error(`${title} error:`, error);
  }

  return (
    <div className="mainContentWrapper my-5">
      <h1 className="title">{title}</h1>

      {isLoading && (
        <div className="d-flex flex-row flex-wrap justify-content-around py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductShimmerContiner key={i} />
          ))}
        </div>
      )}

      {isError && <p style={{ color: "red" }}>Something went wrong</p>}

      {!isLoading && !isError && (
        <div className="d-flex flex-row flex-nowrap overflow-auto py-4">
          {products?.map((p) => (
            <div key={p.id} className="flex-shrink-0 me-3">
              <ProductContainer product={p} />
            </div>
          ))}
        </div>
      )}

      {/* View All */}
       <AnimatedPillButton label="View All"
         onClick={() => {}}/>
   
    </div>
  );
};

export default ProductDisplayRow;
