import React from "react";

// Define your component
const About: React.FC & { route: string } = () => {
  return <h1>About Page</h1>;
};

// Attach a static property
About.route = "/about";

export default About;
