import { useGetTopSellingQuery } from "@services/server_api/Product_api";
import ProductDisplayRow from "@components/product/product_dispay_row/Product_dispay_row";

const TopSellingContainer: React.FC = () => {
  return (
    <ProductDisplayRow title="Top Selling" useQuery={useGetTopSellingQuery} />
  );
};

export default TopSellingContainer;
