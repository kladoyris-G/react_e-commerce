import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaCaretDown,
  FaSearch,
} from "react-icons/fa";
import styles from "./Header.module.css";
import Home from "../../pages/home/Home";
import { slide as Menu } from "react-burger-menu";
import "./Burger.css";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className={styles.header}>
        <Menu
          isOpen={isOpen}
          onStateChange={(state) => setIsOpen(state.isOpen)}
        >
          <Link onClick={closeMenu} to="/shop/category1">
            Category 1
          </Link>
          <Link onClick={closeMenu} to="/shop/category2">
            Category 2
          </Link>
          <Link onClick={closeMenu} to="/shop/category3">
            Category 3
          </Link>
          <Link onClick={closeMenu} to="/on-sale">
            On Sale
          </Link>
          <Link onClick={closeMenu} to="/new-arrivals">
            New Arrivals
          </Link>
          <Link onClick={closeMenu} to="/brands">
            Brands
          </Link>
        </Menu>
        <nav className={clsx(styles.navbar, "mainContentWrapper")}>
          {/* Logo */}
          <h1 className={styles.logo}>
            <Link to={Home.route}>SHOP.CO</Link>
          </h1>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>
                Shop <FaCaretDown size={14} />
              </button>

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

          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for products..."
              className={styles.searchBar}
            />
          </div>

          {/* Icons */}
          <div className={styles.icons}>
            <FaSearch size={20} className={styles.mobileSearchIcon} />
            <FaShoppingCart size={20} />
            <FaUserCircle size={20} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
