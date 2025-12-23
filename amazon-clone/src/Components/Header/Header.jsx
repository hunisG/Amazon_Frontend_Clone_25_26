
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () =>{

const [{basket},dispatch] =useContext(DataContext)
// console.log(basket.length);
const totalItem =basket?.reduce((value,item)=>{
  return item.value + value
},0)
  return (
    <section className={styles.fixed}>
      <header className={styles.header}>
        {/* Left: Logo + Delivery */}
        <div className={styles.headerLeft}>
          {/* Logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="Amazon Logo"
              className={styles.logo}
            />
          </Link>

          {/* Delivery */}
          <div className={styles.delivery}>
            <FaMapMarkerAlt className={styles.deliveryIcon} />
            <div>
              <p className={styles.smallText}>Deliver to</p>
              <span className={styles.boldText}>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className={styles.headerCenter}>
          <select className={styles.categorySelect} aria-label="Category">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
          </select>

          <input
            type="text"
            placeholder="Search product"
            className={styles.searchInput}
            aria-label="Search"
          />

          <button className={styles.searchBtn} aria-label="Search button">
            <FaSearch />
          </button>
        </div>

        {/* Right: EN + Account, Orders, Cart */}
        <div className={styles.headerRight}>
          {/* Static EN with US flag */}
          <div className={styles.languageStatic}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/120px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
              className={styles.flagIcon}
            />
            <select>
              <option value="en">EN</option>
              <option value="am">AM</option>
            </select>
          </div>

          {/* Account & Lists */}
          <Link to="/signin" className={styles.headerLink}>
            <div>
              <p className={styles.smallText}>Sign In</p>
              <span className={styles.boldText}>Account & Lists</span>
            </div>
          </Link>

          {/* Returns & Orders */}
          <Link to="/orders" className={styles.headerLink}>
            <div>
              <p className={styles.smallText}>Returns</p>
              <span className={styles.boldText}>& Orders</span>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={styles.cartLink}>
            <FaShoppingCart size ={35} className={styles.cartIcon} />
            <span className={styles.cartCount}>{totalItem}</span>
          </Link>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header;
