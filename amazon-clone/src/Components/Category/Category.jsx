
import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";
import { categoryInfo } from "./CategoryFullInfo";

const Category = () => {
  const navigate = useNavigate();

  const handleShop = (categoryId) => {
    navigate(`/category/${encodeURIComponent(categoryId)}`);
  };

  return (
    <section className={styles.categoryContainer}>
      <div className={styles.categoryGrid}>
        {categoryInfo.map((cat, idx) => (
          <CategoryCard
            key={`${cat.id ?? cat.name}-${idx}`}
            title={cat.name}
            img={cat.image}
            categoryId={cat.id ?? cat.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
