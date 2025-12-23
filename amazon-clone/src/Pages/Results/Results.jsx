
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import api from "../../api/api";
import Loader from "../../Components/Loader/Loader";
import styles from "./Results.module.css";

export default function Results() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!categoryName) return;

    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/products/category/${categoryName}`);
        setProducts(res.data || []);
      } catch (err) {
        console.error("Fetch category error:", err);
        setError("Failed to load category products");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <LayOut>
      {loading && <Loader />}
      {error && <p className={styles.status}>{error}</p>}

      {!loading && !error && (
        <section className={styles.container}>
          <h2 className={styles.heading}>Results for "{categoryName}"</h2>

          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}
