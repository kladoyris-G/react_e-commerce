import { useGetTopSellingQuery } from "@services/server_api/Product_api";
import ProductDisplayRow from "@components/product/product_dispay_row/Product_dispay_row";

const YouMayALsoLikeContainer: React.FC = () => {
  return (
    <ProductDisplayRow title="You might also like" useQuery={useGetTopSellingQuery} />
  );
};

export default YouMayALsoLikeContainer;
