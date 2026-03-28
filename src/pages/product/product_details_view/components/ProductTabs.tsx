import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { ProductWithDetails } from "@models/product/Product_with_details";
import styles from "../Product_detailes.view.module.css";
import ProductRatingAndReviewsContainer from "./Product_rating_and_reviews_container";
import YouMayALsoLikeContainer from "@pages/home/componets/You_may_also_like/You_may_also_like";
import ProductFAQsContainer from "./product_faqs_container/Product_faqs_container";

type ProductTabsProps = {
  productWithDetails: ProductWithDetails;
  className?: string;
};

const ProductTabs: React.FC<ProductTabsProps> = ({ productWithDetails,className }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className}>
      <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)} variant="fullWidth">
        <Tab label="Product Details" />
        <Tab label="Rating & Reviews" />
        <Tab label="FAQs" />
      </Tabs>
      <div key={activeTab} className={styles.tabContent}>
        {activeTab === 0 && <p>{productWithDetails.fullDescription}</p>}
        {activeTab === 1 && <ProductRatingAndReviewsContainer customersRatings={productWithDetails.customersRatings}/>}
        {activeTab === 2 && <ProductFAQsContainer fqas={productWithDetails.faqs}/>}
      </div>
    <YouMayALsoLikeContainer/>

    </div>
  );
};

export default ProductTabs;
