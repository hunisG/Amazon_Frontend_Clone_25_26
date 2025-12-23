import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "../Header/Header.module.css";
// adjust path if your folder structure is different

function LowerHeader() {
  return (
    <div className={styles.lowerHeader}>
      {/* Left menu icon */}
      <div className={styles.menu}>
        <FaBars className={styles.menuIcon} />
        <span>All</span>
      </div>

      {/* Navigation links */}
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.lowerLink}>
          Today's Deals
        </Link>
        <Link to="/" className={styles.lowerLink}>
          Customer Service
        </Link>
        <Link to="/" className={styles.lowerLink}>
          Registry
        </Link>
        <Link to="/" className={styles.lowerLink}>
          Gift Cards
        </Link>
        <Link to="/" className={styles.lowerLink}>
          Sell
        </Link>
      </nav>
    </div>
  );
}

export default LowerHeader;
