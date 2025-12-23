
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../../Components/Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className={styles.status}>{error}</p>;

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard renderAdd={true} key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
