
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import api from "../../api/api";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${productId}`);
        setProduct(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <LayOut>
      <div>
        {loading && <Loader />}

        {!loading && product && (
          <div>
            <ProductCard 
            product={product} 
            flex={true}
            renderDesc={true}  
            renderAdd={true}/>
          </div>
        )}
      </div>
    </LayOut>
  );
}
