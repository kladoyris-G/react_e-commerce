import React from "react";
import HeroContainer from "./componets/Hero_container/Hero_container";
import BrandsContainer from "./componets/Brands_container/Brands_container";

const Home: React.FC & { route: string } = () => {
  return (
    <>
      <HeroContainer />
      <BrandsContainer />
    </>
  );
};

Home.route = "/";

export default Home;
