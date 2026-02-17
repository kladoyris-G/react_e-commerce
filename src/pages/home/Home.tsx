import React from "react";
import HeroContainer from "./componets/Hero_section/Hero_section";
import BrandsContainer from "./componets/Brands_section/Brands_section";
import NewArrivalsContainer from "./componets/New_arrivals_section/New_arrivals_section";
import TopSellingContainer from "./componets/Top_selling_section/Top_selling_section";
import DressStyleContainer from "./componets/Dress_style_section/Dress_style_section";
import RatingsContainer from "./componets/Ratings_section/Ratings_section";

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
      <RatingsContainer />
    </>
  );
};

Home.route = "/";

export default Home;
