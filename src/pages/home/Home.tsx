import React from "react";
import HeroContainer from "./componets/Hero_container/Hero_container";
import BrandsContainer from "./componets/Brands_container/Brands_container";
import NewArrivalsContainer from "./componets/New_arrivals_container/New_arrivals_container";
import TopSellingContainer from "./componets/Top_selling_container/Top_selling_container";
import DressStyleContainer from "./componets/Dress_style_container/Dress_style_container";

const Home: React.FC & { route: string } = () => {
  return (
    <>
      <HeroContainer />
      <BrandsContainer />
      <NewArrivalsContainer />
      <div className="mainContentWrapper">
        <hr />
      </div>
      <TopSellingContainer />
      <DressStyleContainer />
      <div className="p-5"></div>
    </>
  );
};

Home.route = "/";

export default Home;
