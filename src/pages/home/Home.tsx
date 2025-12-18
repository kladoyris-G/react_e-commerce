import React from "react";
import HeroContainer from "./componets/Hero_container/Hero_container";
import BrandsContainer from "./componets/Brands_container/Brands_container";
import NewArrivalsContainer from "./componets/New_arrivals_container/New_arrivals_container";

const Home: React.FC & { route: string } = () => {
  return (
    <>
      <HeroContainer />
      <BrandsContainer />
      <NewArrivalsContainer />
    </>
  );
};

Home.route = "/";

export default Home;
