import React from "react";

// Define your component
const Home: React.FC & { route: string } = () => {
  return <h1>Home Page</h1>;
};

// Attach a static property
Home.route = "/";

export default Home;
