import { Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import MainLayout from "@components/layouts/Main_layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={Home.route} element={<Home />} />
        <Route path={About.route} element={<About />} />
      </Route>
    </Routes>
  );
}
