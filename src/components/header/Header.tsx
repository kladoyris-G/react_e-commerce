import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";

export default function Header() {
  return (
    <>
      <Router>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
