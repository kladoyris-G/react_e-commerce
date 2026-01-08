import { useGetNewArrivalsQuery } from "@services/server_api/Product_api";
import ProductDisplayRow from "@components/product/product_dispay_row/Product_dispay_row";

const NewArrivalsContainer: React.FC = () => {
  return (
    <ProductDisplayRow title="NEW ARRIVALS" useQuery={useGetNewArrivalsQuery} />
  );
};

export default NewArrivalsContainer;
