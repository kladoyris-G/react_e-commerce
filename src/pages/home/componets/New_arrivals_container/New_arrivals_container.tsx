import styles from "./New_arrivals_container.module.css";
import { useGetNewArrivalsQuery } from "../../../../services/server_api/Product_api";
import ProductShimmerContiner from "../../../../components/product/product_shimmer_container/Product_shimmer_container";
import ProductContainer from "../../../../components/product/product_container/Product_container";

const NewArrivalsContainer: React.FC = () => {
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useGetNewArrivalsQuery();

  if (isError) {
    console.log("New Arrivals error response:", error);
  }

  return (
    <div className="mainContentWrapper my-5">
      <h1 className={styles.title}>NEW ARRIVALS</h1>

      {isLoading && (
        <div className="d-flex flex-row flex-wrap justify-content-around py-4 ">
          <ProductShimmerContiner className="col-xs" />
          <ProductShimmerContiner className="col-xs" />
          <ProductShimmerContiner className="col-xs" />
          <ProductShimmerContiner className="col-xs" />
        </div>
      )}

      {isError && <p style={{ color: "red" }}>Something went worng error as</p>}

      {/* Success */}
      {!isLoading && !isError && (
        <div className="d-flex flex-row flex-wrap justify-content-around py-4 ">
          {products?.map((p) => (
            <ProductContainer product={p} className="col-xs" />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrivalsContainer;
