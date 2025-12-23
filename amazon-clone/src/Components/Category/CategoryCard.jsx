
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";

const CategoryCard = ({ title, img, categoryId }) => {
  return (
    <section className={styles.categoryCard}>
      {/* IMAGE AS LINK */}
      <Link
        to={`/category/${encodeURIComponent(categoryId)}`}
        className={styles.imageWrap}
      >
        <img src={img} alt={title} className={styles.image} />
      </Link>

      {/* CARD BODY */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>

        {/* SHOP BUTTON */}
        <Link
          to={`/category/${encodeURIComponent(categoryId)}`}
          className={styles.shopBtn}
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default CategoryCard;
