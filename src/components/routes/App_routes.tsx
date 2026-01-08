import { Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import About from "@pages/about/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={Home.route} element={<Home />} />
      <Route path={About.route} element={<About />} />
    </Routes>
  );
}
