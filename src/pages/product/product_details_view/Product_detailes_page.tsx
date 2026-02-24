import { useGetProductDetailsQuery } from "@services/server_api/Product_api";
import { skipToken } from "@reduxjs/toolkit/query";
import type React from "react";
import { useParams } from "react-router-dom";
import ProductDetailesView from "./Product_detailes.view";

interface RouteComponent extends React.FC {
  route: string;
  buildRoute: (id: string | number) => string;
}

const ProductDetailesPage: RouteComponent = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: productWithDetails,
    isError,
    error,
  } = useGetProductDetailsQuery(id ?? skipToken);

  if (isError) {
    return <> {error}</>;
  }

  return <ProductDetailesView productWithDetails={productWithDetails} />;
};

ProductDetailesPage.route = "/product/:id";

ProductDetailesPage.buildRoute = (id: string | number) =>
  ProductDetailesPage.route.replace(":id", String(id));

export default ProductDetailesPage;
