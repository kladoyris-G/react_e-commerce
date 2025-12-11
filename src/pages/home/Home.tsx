import React from "react";

import HeroContainer from "./componets/Hero_container/Hero_container";

const Home: React.FC & { route: string } = () => {
  return (
    <>
      <HeroContainer />
    </>
  );
};

Home.route = "/";

export default Home;
