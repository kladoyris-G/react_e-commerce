import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";
import Home from "../../pages/home/Home";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <h1 className={styles.logo}>
        <Link to={Home.route}>SHOP.CO</Link>
      </h1>

      {/* Menu */}
      <ul className={styles.menu}>
        <li className={styles.dropdown}>
          <button className={styles.dropbtn}>Shop ▼</button>
          <div className={styles.dropdownContent}>
            <Link to="/shop/category1">Category 1</Link>
            <Link to="/shop/category2">Category 2</Link>
            <Link to="/shop/category3">Category 3</Link>
          </div>
        </li>
        <li>
          <Link to="/on-sale" className={styles.menuItem}>
            On Sale
          </Link>
        </li>
        <li>
          <Link to="/new-arrivals" className={styles.menuItem}>
            New Arrivals
          </Link>
        </li>
        <li>
          <Link to="/brands" className={styles.menuItem}>
            Brands
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        className={styles.searchBar}
      />

      {/* Icons */}
      <div className={styles.icons}>
        <FaShoppingCart size={20} />
        <FaUserCircle size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
