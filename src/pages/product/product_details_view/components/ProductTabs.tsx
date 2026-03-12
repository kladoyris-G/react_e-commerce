import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import type { ProductWithDetails } from "@models/product/Product_with_details";
import styles from "../Product_detailes.view.module.css";

type ProductTabsProps = {
  productWithDetails: ProductWithDetails;
};

const ProductTabs: React.FC<ProductTabsProps> = ({ productWithDetails }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)}>
        <Tab label="Description" />
        <Tab label="Reviews" />
        <Tab label="Details" />
      </Tabs>
      <div key={activeTab} className={styles.tabContent}>
        {activeTab === 0 && <p>{productWithDetails.fullDescription}</p>}
        {activeTab === 1 && <p>Reviews go here...</p>}
        {activeTab === 2 && <p>Details go here...</p>}
      </div>
    </>
  );
};

export default ProductTabs;
