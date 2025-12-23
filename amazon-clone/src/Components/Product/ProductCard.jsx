
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./Product.module.css";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc, renderAdd,disableLink=false }) => {
  if (!product) return null;

  const { id, title, image, price, rating, description } = product;

  const rate = rating?.rate ?? 0;
  const count = rating?.count ?? 0;

  const [state, dispatch] = useContext(DataContext);

  const onAddToCart = (e) => {
    e.stopPropagation(); // prevents navigation
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product,
    });
  };

  return (
    <section className={flex ? styles.cardFlex : styles.card}>
      {disableLink ? 
      (<div className={styles.imageWrap}> 
        <img src={image} alt={title} className={styles.image} />
      
      </div >
      ) :  (
     
      <Link to={"/products/" + id} className={styles.imageWrap}>
        <img src={image} alt={title}className={styles.image} />
      </Link>
    )}
      <div className={flex ? styles.cardBodyFlex : styles.cardBody}>
 {disableLink ? 
 (<h3 className= {styles.title}>{title}</h3>) :(
        <Link to={`/products/${id}`} className={styles.titleLink}>
          <h3 className={styles.title}>
            {!flex && title.length > 60 ? title.slice(0, 57) + "…" : title}
          </h3>
        </Link>
 )}

        <div className={styles.ratingRow}>
          <Rating value={rate} precision={0.5} readOnly size="small" />
          <span className={styles.ratingText}>({count} reviews)</span>
        </div>

        <div className={styles.priceRow}>
          <CurrencyFormat value={price} type="price" />
        </div>

        {flex && renderDesc && (
          <p className={styles.description}>{description}</p>
        )}

        {renderAdd && (
          <button className={styles.cartBtn} onClick={onAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCard;


